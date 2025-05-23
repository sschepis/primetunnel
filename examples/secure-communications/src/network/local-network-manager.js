/**
 * Local Network Manager
 * Handles control plane communications over local network
 * IMPORTANT: NO USER DATA is transmitted through this layer
 * Only coordination, discovery, synchronization, and routing metadata
 */

import dgram from 'dgram';
import { EventEmitter } from 'events';
import { 
  CONTROL_MESSAGE_TYPES, 
  ControlMessage,
  NodeDiscoveryData,
  SynchronizationData,
  ChannelNegotiationData,
  NetworkTopology,
  ProtocolValidator,
  NETWORK_EVENTS,
  NODE_CAPABILITIES
} from './network-protocol.js';
import { NETWORK_CONFIG } from '../config/network-config.js';

export class LocalNetworkManager extends EventEmitter {
  constructor(nodeId, config = {}) {
    super();
    
    this.nodeId = nodeId;
    this.config = { ...NETWORK_CONFIG.localNetwork, ...config };
    this.networkId = config.networkId || 'default-mesh';
    
    this.server = null;
    this.isRunning = false;
    this.port = this.config.discoveryPort;
    
    // Network state
    this.knownNodes = new Map(); // nodeId -> NodeInfo
    this.topology = new NetworkTopology();
    this.pendingRequests = new Map(); // messageId -> Promise resolver
    
    // Timing and health
    this.lastDiscovery = 0;
    this.heartbeatTimer = null;
    this.cleanupTimer = null;
    
    // Node capabilities
    this.capabilities = this.calculateCapabilities(config);
    
    // Message handlers
    this.messageHandlers = new Map([
      [CONTROL_MESSAGE_TYPES.NODE_DISCOVERY, this.handleNodeDiscovery.bind(this)],
      [CONTROL_MESSAGE_TYPES.NODE_ANNOUNCEMENT, this.handleNodeAnnouncement.bind(this)],
      [CONTROL_MESSAGE_TYPES.SYNCHRONIZATION, this.handleSynchronization.bind(this)],
      [CONTROL_MESSAGE_TYPES.CHANNEL_NEGOTIATION, this.handleChannelNegotiation.bind(this)],
      [CONTROL_MESSAGE_TYPES.HEARTBEAT, this.handleHeartbeat.bind(this)],
      [CONTROL_MESSAGE_TYPES.ROUTING_UPDATE, this.handleRoutingUpdate.bind(this)],
      [CONTROL_MESSAGE_TYPES.NODE_LEAVING, this.handleNodeLeaving.bind(this)],
      [CONTROL_MESSAGE_TYPES.ERROR_REPORT, this.handleErrorReport.bind(this)]
    ]);
  }

  async start() {
    if (this.isRunning) {
      throw new Error('Local network manager already running');
    }

    try {
      // Create UDP server for control messages
      this.server = dgram.createSocket('udp4');
      
      this.server.on('error', (err) => {
        console.error(`Local network server error: ${err}`);
        this.emit('error', err);
      });

      this.server.on('message', (msg, rinfo) => {
        this.handleIncomingMessage(msg, rinfo);
      });

      // Bind to discovery port
      await new Promise((resolve, reject) => {
        this.server.bind(this.port, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });

      this.isRunning = true;
      
      // Start periodic tasks
      this.startHeartbeat();
      this.startCleanupTimer();
      
      // Announce this node to the network
      await this.announceNode();
      
      // Discover existing nodes
      await this.discoverNodes();
      
      console.log(`Local network manager started on port ${this.port}`);
      
    } catch (error) {
      await this.stop();
      throw error;
    }
  }

  async stop() {
    if (!this.isRunning) return;
    
    this.isRunning = false;
    
    // Announce leaving
    try {
      await this.announceLeaving();
    } catch (error) {
      // Ignore errors during shutdown
    }
    
    // Clear timers
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    
    // Close server
    if (this.server) {
      this.server.close();
      this.server = null;
    }
    
    console.log('Local network manager stopped');
  }

  async announceNode() {
    const discoveryData = new NodeDiscoveryData(
      this.nodeId,
      this.capabilities,
      this.getSupportedPrimes(),
      this.networkId
    );

    const message = new ControlMessage(
      CONTROL_MESSAGE_TYPES.NODE_ANNOUNCEMENT,
      this.nodeId,
      discoveryData
    );

    await this.broadcast(message);
    this.emit(NETWORK_EVENTS.NODE_JOINED, { nodeId: this.nodeId });
  }

  async discoverNodes() {
    const now = Date.now();
    if (now - this.lastDiscovery < 1000) {
      return; // Rate limit discoveries
    }
    
    this.lastDiscovery = now;
    
    const discoveryData = new NodeDiscoveryData(
      this.nodeId,
      this.capabilities,
      this.getSupportedPrimes(),
      this.networkId
    );

    const message = new ControlMessage(
      CONTROL_MESSAGE_TYPES.NODE_DISCOVERY,
      this.nodeId,
      discoveryData
    );

    await this.broadcast(message);
  }

  async synchronizeWith(targetNodeId) {
    const syncData = new SynchronizationData(
      this.nodeId,
      this.getClockOffset(),
      this.getQuantumStateHash(),
      this.getPrimeConfiguration()
    );

    const message = new ControlMessage(
      CONTROL_MESSAGE_TYPES.SYNCHRONIZATION,
      this.nodeId,
      syncData
    );

    return await this.sendToNode(targetNodeId, message);
  }

  async negotiateQuantumChannel(targetNodeId, primeSet, frequencies) {
    const negotiationData = new ChannelNegotiationData(
      this.nodeId,
      targetNodeId,
      primeSet,
      frequencies,
      this.getEncryptionParams()
    );

    const message = new ControlMessage(
      CONTROL_MESSAGE_TYPES.CHANNEL_NEGOTIATION,
      this.nodeId,
      negotiationData
    );

    return await this.sendToNode(targetNodeId, message);
  }

  async sendToNode(targetNodeId, message) {
    const nodeInfo = this.knownNodes.get(targetNodeId);
    if (!nodeInfo) {
      throw new Error(`Unknown node: ${targetNodeId}`);
    }

    const messageData = Buffer.from(JSON.stringify(message.toJSON()));
    
    return new Promise((resolve, reject) => {
      // Store pending request
      this.pendingRequests.set(message.messageId, { resolve, reject });
      
      // Set timeout
      setTimeout(() => {
        if (this.pendingRequests.has(message.messageId)) {
          this.pendingRequests.delete(message.messageId);
          reject(new Error('Request timeout'));
        }
      }, this.config.syncTimeout);
      
      // Send message
      this.server.send(messageData, nodeInfo.port, nodeInfo.address, (err) => {
        if (err) {
          this.pendingRequests.delete(message.messageId);
          reject(err);
        }
      });
    });
  }

  async broadcast(message) {
    const messageData = Buffer.from(JSON.stringify(message.toJSON()));
    
    // Broadcast to discovery port on local subnet
    const broadcastAddress = '255.255.255.255';
    
    return new Promise((resolve, reject) => {
      this.server.send(messageData, this.port, broadcastAddress, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  handleIncomingMessage(msgBuffer, rinfo) {
    try {
      const messageData = JSON.parse(msgBuffer.toString());
      
      // Validate message structure
      if (!ProtocolValidator.validateControlMessage(messageData)) {
        console.warn('Invalid control message received:', messageData);
        return;
      }
      
      const message = ControlMessage.fromJSON(messageData);
      
      // Ignore messages from self
      if (message.sourceNodeId === this.nodeId) {
        return;
      }
      
      // Update node information
      this.updateNodeInfo(message.sourceNodeId, rinfo);
      
      // Handle message based on type
      const handler = this.messageHandlers.get(message.type);
      if (handler) {
        handler(message, rinfo);
      } else {
        console.warn(`Unknown message type: ${message.type}`);
      }
      
    } catch (error) {
      console.error('Error handling incoming message:', error);
    }
  }

  updateNodeInfo(nodeId, rinfo) {
    this.knownNodes.set(nodeId, {
      nodeId,
      address: rinfo.address,
      port: rinfo.port,
      lastSeen: Date.now(),
      status: 'active'
    });
    
    this.topology.addNode(nodeId, {
      address: rinfo.address,
      port: rinfo.port,
      capabilities: 0 // Will be updated by specific handlers
    });
  }

  // Message Handlers

  async handleNodeDiscovery(message, rinfo) {
    const data = message.data;
    
    // Check if this is for our network
    if (data.networkId !== this.networkId) {
      return;
    }
    
    // Respond with our announcement
    await this.announceNode();
    
    this.emit(NETWORK_EVENTS.NODE_JOINED, { 
      nodeId: message.sourceNodeId,
      capabilities: data.capabilities
    });
  }

  handleNodeAnnouncement(message, rinfo) {
    const data = message.data;
    
    // Check if this is for our network
    if (data.networkId !== this.networkId) {
      return;
    }
    
    // Update node capabilities
    const nodeInfo = this.knownNodes.get(message.sourceNodeId);
    if (nodeInfo) {
      nodeInfo.capabilities = data.capabilities;
      nodeInfo.primeSupport = data.primeSupport;
    }
    
    this.topology.addNode(message.sourceNodeId, {
      address: rinfo.address,
      port: rinfo.port,
      capabilities: data.capabilities,
      primeSupport: data.primeSupport
    });
    
    this.emit(NETWORK_EVENTS.NODE_JOINED, { 
      nodeId: message.sourceNodeId,
      capabilities: data.capabilities
    });
  }

  handleSynchronization(message, rinfo) {
    const data = message.data;
    
    // Process synchronization data
    const syncResult = {
      success: true,
      clockDrift: this.calculateClockDrift(data.clockOffset),
      quantumStateMatch: this.verifyQuantumState(data.quantumStateHash),
      primeCompatibility: this.checkPrimeCompatibility(data.primeConfiguration)
    };
    
    // Resolve pending request if any
    const pendingRequest = this.pendingRequests.get(message.messageId);
    if (pendingRequest) {
      this.pendingRequests.delete(message.messageId);
      pendingRequest.resolve(syncResult);
    }
    
    this.emit('synchronization', {
      nodeId: message.sourceNodeId,
      result: syncResult
    });
  }

  handleChannelNegotiation(message, rinfo) {
    const data = message.data;
    
    // Process channel negotiation
    const negotiationResult = {
      success: true,
      channelId: data.channelId,
      primeSet: data.primeSet,
      frequencies: data.frequencies,
      approved: this.approveChannelNegotiation(data)
    };
    
    // Resolve pending request if any
    const pendingRequest = this.pendingRequests.get(message.messageId);
    if (pendingRequest) {
      this.pendingRequests.delete(message.messageId);
      pendingRequest.resolve(negotiationResult);
    }
    
    this.emit('channel-negotiation', {
      nodeId: message.sourceNodeId,
      result: negotiationResult
    });
  }

  handleHeartbeat(message, rinfo) {
    // Update last seen time
    const nodeInfo = this.knownNodes.get(message.sourceNodeId);
    if (nodeInfo) {
      nodeInfo.lastSeen = Date.now();
    }
    
    // Respond with our heartbeat if needed
    if (message.data && message.data.requestResponse) {
      this.sendHeartbeat(message.sourceNodeId);
    }
  }

  handleRoutingUpdate(message, rinfo) {
    const data = message.data;
    
    // Update topology information
    if (data.topology) {
      this.mergeTopologyUpdate(data.topology);
    }
    
    this.emit(NETWORK_EVENTS.TOPOLOGY_CHANGED, {
      sourceNodeId: message.sourceNodeId,
      topology: this.topology.toJSON()
    });
  }

  handleNodeLeaving(message, rinfo) {
    // Remove node from known nodes and topology
    this.knownNodes.delete(message.sourceNodeId);
    this.topology.removeNode(message.sourceNodeId);
    
    this.emit(NETWORK_EVENTS.NODE_LEFT, { 
      nodeId: message.sourceNodeId 
    });
  }

  handleErrorReport(message, rinfo) {
    const data = message.data;
    
    this.emit(NETWORK_EVENTS.ERROR_OCCURRED, {
      sourceNodeId: message.sourceNodeId,
      error: data.error,
      timestamp: message.timestamp
    });
  }

  // Periodic Tasks

  startHeartbeat() {
    this.heartbeatTimer = setInterval(() => {
      this.sendHeartbeatToAll();
    }, this.config.heartbeatInterval);
  }

  startCleanupTimer() {
    this.cleanupTimer = setInterval(() => {
      this.cleanupStaleNodes();
    }, this.config.nodeTimeout);
  }

  async sendHeartbeatToAll() {
    const heartbeatData = {
      timestamp: Date.now(),
      activeConnections: this.knownNodes.size
    };

    const message = new ControlMessage(
      CONTROL_MESSAGE_TYPES.HEARTBEAT,
      this.nodeId,
      heartbeatData
    );

    await this.broadcast(message);
  }

  async sendHeartbeat(targetNodeId) {
    const heartbeatData = {
      timestamp: Date.now(),
      requestResponse: false
    };

    const message = new ControlMessage(
      CONTROL_MESSAGE_TYPES.HEARTBEAT,
      this.nodeId,
      heartbeatData
    );

    try {
      await this.sendToNode(targetNodeId, message);
    } catch (error) {
      // Ignore heartbeat send errors
    }
  }

  cleanupStaleNodes() {
    const now = Date.now();
    const timeout = this.config.nodeTimeout;
    
    for (const [nodeId, nodeInfo] of this.knownNodes.entries()) {
      if (now - nodeInfo.lastSeen > timeout) {
        this.knownNodes.delete(nodeId);
        this.topology.removeNode(nodeId);
        
        this.emit(NETWORK_EVENTS.NODE_LEFT, { 
          nodeId,
          reason: 'timeout'
        });
      }
    }
  }

  async announceLeaving() {
    const message = new ControlMessage(
      CONTROL_MESSAGE_TYPES.NODE_LEAVING,
      this.nodeId,
      { reason: 'shutdown' }
    );

    await this.broadcast(message);
  }

  // Utility Methods

  calculateCapabilities(config) {
    let capabilities = 0;
    
    capabilities |= NODE_CAPABILITIES.QUANTUM_TRANSMIT;
    capabilities |= NODE_CAPABILITIES.QUANTUM_RECEIVE;
    capabilities |= NODE_CAPABILITIES.ROUTING;
    
    if (config.enableEncryption) {
      capabilities |= NODE_CAPABILITIES.ENCRYPTION;
    }
    
    if (config.enableMonitoring) {
      capabilities |= NODE_CAPABILITIES.MONITORING;
    }
    
    if (config.securityLevel === 'high_security') {
      capabilities |= NODE_CAPABILITIES.HIGH_SECURITY;
    }
    
    return capabilities;
  }

  getSupportedPrimes() {
    return NETWORK_CONFIG.primes[this.config.securityLevel || 'standard'];
  }

  getClockOffset() {
    // In a real implementation, this would use NTP or similar
    return Date.now();
  }

  getQuantumStateHash() {
    // Hash of current quantum state for synchronization
    // This is a placeholder - real implementation would hash the quantum state
    return Math.random().toString(36).substring(2, 15);
  }

  getPrimeConfiguration() {
    return {
      securityLevel: this.config.securityLevel || 'standard',
      primeCount: this.getSupportedPrimes().length,
      supportedSets: Object.keys(NETWORK_CONFIG.primes)
    };
  }

  getEncryptionParams() {
    if (!this.config.enableEncryption) {
      return null;
    }
    
    return {
      algorithm: 'quantum-prime-resonance',
      keySize: 256,
      version: '1.0.0'
    };
  }

  calculateClockDrift(remoteOffset) {
    const localOffset = this.getClockOffset();
    return Math.abs(localOffset - remoteOffset);
  }

  verifyQuantumState(remoteStateHash) {
    const localStateHash = this.getQuantumStateHash();
    // In real implementation, this would verify quantum state compatibility
    return true; // Placeholder
  }

  checkPrimeCompatibility(remotePrimeConfig) {
    const localPrimeConfig = this.getPrimeConfiguration();
    return localPrimeConfig.securityLevel === remotePrimeConfig.securityLevel;
  }

  approveChannelNegotiation(negotiationData) {
    // Check if we can support the requested channel parameters
    const supportedPrimes = this.getSupportedPrimes();
    const requestedPrimes = negotiationData.primeSet;
    
    // Verify all requested primes are in our supported set
    return requestedPrimes.every(prime => supportedPrimes.includes(prime));
  }

  mergeTopologyUpdate(remoteTopology) {
    // Merge remote topology information with local topology
    // This would implement sophisticated topology merging logic
    // For now, just update last update time
    this.topology.lastUpdate = Date.now();
  }

  // Public API

  getKnownNodes() {
    return Array.from(this.knownNodes.keys());
  }

  getNodeInfo(nodeId) {
    return this.knownNodes.get(nodeId);
  }

  getTopology() {
    return this.topology.toJSON();
  }

  getStatistics() {
    return {
      nodeId: this.nodeId,
      networkId: this.networkId,
      isRunning: this.isRunning,
      knownNodes: this.knownNodes.size,
      capabilities: this.capabilities,
      lastDiscovery: this.lastDiscovery,
      topology: this.topology.toJSON()
    };
  }
}

export default LocalNetworkManager;