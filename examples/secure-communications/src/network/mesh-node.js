/**
 * Quantum Mesh Node
 * Core implementation of a mesh network node that combines
 * local network coordination with quantum data channels
 */

import { EventEmitter } from 'events';
import LocalNetworkManager from './local-network-manager.js';
import QuantumChannelManager from './quantum-channel-manager.js';
import { 
  NETWORK_EVENTS, 
  CHANNEL_STATES,
  NODE_CAPABILITIES 
} from './network-protocol.js';
import { DEFAULT_CONFIG } from '../config/network-config.js';

export class QuantumMeshNode extends EventEmitter {
  constructor(nodeId, config = {}) {
    super();
    
    if (!nodeId) {
      throw new Error('Node ID is required');
    }
    
    this.nodeId = nodeId;
    this.config = { ...DEFAULT_CONFIG, ...config, nodeId };
    this.networkId = this.config.networkId;
    
    // Network managers
    this.localNetworkManager = new LocalNetworkManager(nodeId, this.config);
    this.quantumChannelManager = new QuantumChannelManager(nodeId, this.config);
    
    // Node state
    this.isActive = false;
    this.isJoined = false;
    this.joinedAt = null;
    
    // Statistics and monitoring
    this.statistics = {
      messagesReceived: 0,
      messagesSent: 0,
      quantumChannelsEstablished: 0,
      nodesDiscovered: 0,
      errors: 0
    };
    
    // Setup event forwarding and handling
    this.setupEventHandlers();
  }

  setupEventHandlers() {
    // Forward events from local network manager
    this.localNetworkManager.on(NETWORK_EVENTS.NODE_JOINED, (data) => {
      this.statistics.nodesDiscovered++;
      this.handleNodeJoined(data);
    });
    
    this.localNetworkManager.on(NETWORK_EVENTS.NODE_LEFT, (data) => {
      this.handleNodeLeft(data);
    });
    
    this.localNetworkManager.on('synchronization', (data) => {
      this.handleSynchronization(data);
    });
    
    this.localNetworkManager.on('channel-negotiation', (data) => {
      this.handleChannelNegotiation(data);
    });
    
    this.localNetworkManager.on(NETWORK_EVENTS.ERROR_OCCURRED, (data) => {
      this.statistics.errors++;
      this.emit(NETWORK_EVENTS.ERROR_OCCURRED, data);
    });
    
    // Forward events from quantum channel manager
    this.quantumChannelManager.on(NETWORK_EVENTS.CHANNEL_ESTABLISHED, (data) => {
      this.statistics.quantumChannelsEstablished++;
      this.emit(NETWORK_EVENTS.CHANNEL_ESTABLISHED, data);
    });
    
    this.quantumChannelManager.on(NETWORK_EVENTS.CHANNEL_CLOSED, (data) => {
      this.emit(NETWORK_EVENTS.CHANNEL_CLOSED, data);
    });
    
    this.quantumChannelManager.on(NETWORK_EVENTS.MESSAGE_RECEIVED, (data) => {
      this.statistics.messagesReceived++;
      this.emit(NETWORK_EVENTS.MESSAGE_RECEIVED, data);
    });
    
    this.quantumChannelManager.on(NETWORK_EVENTS.ERROR_OCCURRED, (data) => {
      this.statistics.errors++;
      this.emit(NETWORK_EVENTS.ERROR_OCCURRED, data);
    });
  }

  async join(networkId = null) {
    if (this.isJoined) {
      throw new Error('Node is already joined to a network');
    }
    
    if (networkId) {
      this.networkId = networkId;
      this.config.networkId = networkId;
    }
    
    try {
      console.log(`[${this.nodeId}] Joining mesh network: ${this.networkId}`);
      
      // Start local network manager for discovery and coordination
      await this.localNetworkManager.start();
      
      // Start quantum channel manager
      this.quantumChannelManager.start();
      
      this.isActive = true;
      this.isJoined = true;
      this.joinedAt = Date.now();
      
      console.log(`[${this.nodeId}] Successfully joined mesh network`);
      
      // Give some time for node discovery
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Attempt to establish quantum channels with discovered nodes
      await this.establishInitialChannels();
      
      this.emit(NETWORK_EVENTS.NODE_JOINED, { 
        nodeId: this.nodeId,
        networkId: this.networkId,
        timestamp: this.joinedAt
      });
      
      return true;
    } catch (error) {
      console.error(`[${this.nodeId}] Failed to join network:`, error);
      await this.leave();
      throw error;
    }
  }

  async leave() {
    if (!this.isJoined) {
      return;
    }
    
    console.log(`[${this.nodeId}] Leaving mesh network`);
    
    try {
      // Close all quantum channels
      await this.quantumChannelManager.stop();
      
      // Stop local network manager (announces leaving)
      await this.localNetworkManager.stop();
      
      this.isActive = false;
      this.isJoined = false;
      
      this.emit(NETWORK_EVENTS.NODE_LEFT, { 
        nodeId: this.nodeId,
        timestamp: Date.now()
      });
      
      console.log(`[${this.nodeId}] Left mesh network`);
    } catch (error) {
      console.error(`[${this.nodeId}] Error leaving network:`, error);
      throw error;
    }
  }

  async sendMessage(targetNodeId, data) {
    if (!this.isActive) {
      throw new Error('Node is not active');
    }
    
    if (!targetNodeId) {
      throw new Error('Target node ID is required');
    }
    
    if (targetNodeId === this.nodeId) {
      throw new Error('Cannot send message to self');
    }
    
    try {
      // Check if we have a quantum channel to the target
      let channel = this.quantumChannelManager.getChannel(targetNodeId);
      
      if (!channel || channel.state !== CHANNEL_STATES.CONNECTED) {
        // Attempt to establish channel
        console.log(`[${this.nodeId}] Establishing quantum channel to ${targetNodeId}`);
        channel = await this.establishChannelTo(targetNodeId);
      }
      
      if (!channel) {
        throw new Error(`Failed to establish quantum channel to ${targetNodeId}`);
      }
      
      // Send message via quantum channel
      const success = await this.quantumChannelManager.sendData(targetNodeId, data);
      
      if (success) {
        this.statistics.messagesSent++;
        return true;
      } else {
        throw new Error('Message transmission failed');
      }
      
    } catch (error) {
      this.statistics.errors++;
      console.error(`[${this.nodeId}] Failed to send message to ${targetNodeId}:`, error);
      throw error;
    }
  }

  async broadcastMessage(data) {
    if (!this.isActive) {
      throw new Error('Node is not active');
    }
    
    const connectedNodes = this.getConnectedNodes();
    
    if (connectedNodes.length === 0) {
      console.warn(`[${this.nodeId}] No connected nodes for broadcast`);
      return [];
    }
    
    console.log(`[${this.nodeId}] Broadcasting message to ${connectedNodes.length} nodes`);
    
    const results = [];
    const promises = connectedNodes.map(async (nodeId) => {
      try {
        await this.sendMessage(nodeId, data);
        results.push({ nodeId, success: true });
      } catch (error) {
        results.push({ nodeId, success: false, error: error.message });
      }
    });
    
    await Promise.allSettled(promises);
    return results;
  }

  async establishChannelTo(targetNodeId) {
    if (!this.isActive) {
      throw new Error('Node is not active');
    }
    
    // Check if target node is known
    const knownNodes = this.localNetworkManager.getKnownNodes();
    if (!knownNodes.includes(targetNodeId)) {
      throw new Error(`Unknown target node: ${targetNodeId}`);
    }
    
    try {
      // Negotiate channel parameters via local network
      const primeSet = this.selectPrimeSet(targetNodeId);
      const frequencies = this.calculateFrequencies(primeSet);
      
      console.log(`[${this.nodeId}] Negotiating quantum channel with ${targetNodeId}`);
      
      const negotiationResult = await this.localNetworkManager.negotiateQuantumChannel(
        targetNodeId,
        primeSet,
        frequencies
      );
      
      if (!negotiationResult.success || !negotiationResult.approved) {
        throw new Error('Channel negotiation failed or was rejected');
      }
      
      // Establish quantum channel
      const channel = await this.quantumChannelManager.establishChannel(
        targetNodeId,
        primeSet
      );
      
      console.log(`[${this.nodeId}] Quantum channel established to ${targetNodeId}`);
      return channel;
      
    } catch (error) {
      console.error(`[${this.nodeId}] Failed to establish channel to ${targetNodeId}:`, error);
      throw error;
    }
  }

  async establishInitialChannels() {
    const knownNodes = this.localNetworkManager.getKnownNodes();
    
    if (knownNodes.length === 0) {
      console.log(`[${this.nodeId}] No nodes discovered for initial channel establishment`);
      return;
    }
    
    console.log(`[${this.nodeId}] Establishing initial channels to ${knownNodes.length} nodes`);
    
    const promises = knownNodes.map(async (nodeId) => {
      try {
        await this.establishChannelTo(nodeId);
      } catch (error) {
        console.warn(`[${this.nodeId}] Failed to establish initial channel to ${nodeId}:`, error.message);
      }
    });
    
    await Promise.allSettled(promises);
    
    const establishedChannels = this.quantumChannelManager.getAllChannels().length;
    console.log(`[${this.nodeId}] Established ${establishedChannels} quantum channels`);
  }

  // Event Handlers

  async handleNodeJoined(data) {
    const { nodeId } = data;
    
    if (nodeId === this.nodeId) {
      return; // Ignore self
    }
    
    console.log(`[${this.nodeId}] Node joined: ${nodeId}`);
    
    // Synchronize with the new node
    try {
      await this.localNetworkManager.synchronizeWith(nodeId);
      
      // Establish quantum channel after a short delay
      setTimeout(async () => {
        try {
          await this.establishChannelTo(nodeId);
        } catch (error) {
          console.warn(`[${this.nodeId}] Failed to auto-establish channel to ${nodeId}:`, error.message);
        }
      }, 1000);
      
    } catch (error) {
      console.warn(`[${this.nodeId}] Failed to synchronize with ${nodeId}:`, error.message);
    }
    
    this.emit(NETWORK_EVENTS.NODE_JOINED, data);
  }

  async handleNodeLeft(data) {
    const { nodeId } = data;
    
    console.log(`[${this.nodeId}] Node left: ${nodeId}`);
    
    // Close quantum channel if exists
    try {
      await this.quantumChannelManager.closeChannel(nodeId);
    } catch (error) {
      // Ignore errors during cleanup
    }
    
    this.emit(NETWORK_EVENTS.NODE_LEFT, data);
  }

  handleSynchronization(data) {
    const { nodeId, result } = data;
    
    if (this.config.verbose) {
      console.log(`[${this.nodeId}] Synchronized with ${nodeId}:`, result);
    }
    
    this.emit('synchronization', data);
  }

  async handleChannelNegotiation(data) {
    const { nodeId, result } = data;
    
    if (result.success && result.approved) {
      // Remote node is requesting a channel to us
      try {
        await this.quantumChannelManager.establishChannel(
          nodeId,
          result.primeSet
        );
        console.log(`[${this.nodeId}] Incoming quantum channel established from ${nodeId}`);
      } catch (error) {
        console.error(`[${this.nodeId}] Failed to establish incoming channel from ${nodeId}:`, error);
      }
    }
    
    this.emit('channel-negotiation', data);
  }

  // Utility Methods

  selectPrimeSet(targetNodeId) {
    // Select appropriate prime set based on security level and target node capabilities
    const securityLevel = this.config.securityLevel || 'standard';
    return this.config.primes?.[securityLevel] || this.config.quantum.primes?.[securityLevel];
  }

  calculateFrequencies(primeSet) {
    // Calculate frequencies for the prime set
    // This is a simplified implementation
    return primeSet.map(prime => prime * 1000); // Convert to Hz
  }

  // Public API

  getNodeId() {
    return this.nodeId;
  }

  getNetworkId() {
    return this.networkId;
  }

  isConnected() {
    return this.isActive && this.isJoined;
  }

  getConnectedNodes() {
    return this.quantumChannelManager.getHealthyChannels();
  }

  getKnownNodes() {
    return this.localNetworkManager.getKnownNodes();
  }

  getChannelHealth(nodeId) {
    return this.quantumChannelManager.getChannelHealth(nodeId);
  }

  getNetworkTopology() {
    return this.localNetworkManager.getTopology();
  }

  getStatistics() {
    const localStats = this.localNetworkManager.getStatistics();
    const quantumStats = this.quantumChannelManager.getStatistics();
    
    return {
      node: {
        nodeId: this.nodeId,
        networkId: this.networkId,
        isActive: this.isActive,
        isJoined: this.isJoined,
        joinedAt: this.joinedAt,
        uptime: this.joinedAt ? Date.now() - this.joinedAt : 0
      },
      messages: {
        sent: this.statistics.messagesSent,
        received: this.statistics.messagesReceived
      },
      network: {
        knownNodes: localStats.knownNodes,
        connectedNodes: this.getConnectedNodes().length,
        quantumChannels: quantumStats.totalChannels,
        healthyChannels: quantumStats.healthyChannels
      },
      performance: {
        errors: this.statistics.errors,
        channelsEstablished: this.statistics.quantumChannelsEstablished,
        nodesDiscovered: this.statistics.nodesDiscovered
      },
      details: {
        local: localStats,
        quantum: quantumStats
      }
    };
  }

  // Health and Monitoring

  async performHealthCheck() {
    const health = {
      node: {
        active: this.isActive,
        joined: this.isJoined,
        uptime: this.joinedAt ? Date.now() - this.joinedAt : 0
      },
      localNetwork: {
        running: this.localNetworkManager.isRunning,
        knownNodes: this.localNetworkManager.getKnownNodes().length
      },
      quantumChannels: {
        running: this.quantumChannelManager.isRunning,
        total: this.quantumChannelManager.getAllChannels().length,
        healthy: this.quantumChannelManager.getHealthyChannels().length
      },
      timestamp: Date.now()
    };

    return health;
  }

  // Configuration

  updateConfig(newConfig) {
    // Update configuration (some changes may require restart)
    Object.assign(this.config, newConfig);
    
    // Update managers if they support dynamic config updates
    // Note: Some changes like prime sets may require channel re-establishment
    
    this.emit('config-updated', { newConfig });
  }

  getConfig() {
    return { ...this.config };
  }
}

export default QuantumMeshNode;