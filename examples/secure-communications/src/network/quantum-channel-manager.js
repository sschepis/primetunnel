/**
 * Quantum Channel Manager
 * Manages quantum communication channels using prime resonance
 * Handles channel establishment, data transmission, and health monitoring
 */

import { EnhancedCommunicationAgent } from '../../../../src/core.js';
import { sendMessage, handleReceivedChunk, PAYLOAD_TYPES } from '../../../messaging.js';
import { 
  QUANTUM_MESSAGE_TYPES, 
  CHANNEL_STATES, 
  QuantumMessageHeader,
  NETWORK_EVENTS 
} from './network-protocol.js';
import { NETWORK_CONFIG } from '../config/network-config.js';

export class QuantumChannel {
  constructor(channelId, localNodeId, remoteNodeId, primeSet, config) {
    this.channelId = channelId;
    this.localNodeId = localNodeId;
    this.remoteNodeId = remoteNodeId;
    this.primeSet = primeSet;
    this.config = config;
    
    this.state = CHANNEL_STATES.DISCONNECTED;
    this.agent = null;
    this.remoteAgent = null; // For simulation purposes
    
    this.health = {
      lastHeartbeat: null,
      successRate: 1.0,
      latency: 0,
      totalMessages: 0,
      successfulMessages: 0,
      errors: []
    };
    
    this.sequenceNumber = 0;
    this.receivedSequences = new Set();
    this.messageBuffer = new Map();
    this.establishedAt = null;
  }

  async establish() {
    try {
      this.state = CHANNEL_STATES.CONNECTING;
      
      // Create quantum communication agent
      this.agent = new EnhancedCommunicationAgent(this.primeSet, this.config);
      
      // For simulation, create remote agent (in real implementation, this would be on remote node)
      this.remoteAgent = new EnhancedCommunicationAgent(this.primeSet, this.config);
      
      this.state = CHANNEL_STATES.HANDSHAKING;
      
      // Perform quantum handshake
      await this.performHandshake();
      
      this.state = CHANNEL_STATES.CONNECTED;
      this.establishedAt = Date.now();
      this.health.lastHeartbeat = Date.now();
      
      return true;
    } catch (error) {
      this.state = CHANNEL_STATES.ERROR;
      this.health.errors.push({
        timestamp: Date.now(),
        error: error.message
      });
      throw error;
    }
  }

  async performHandshake() {
    // Send quantum handshake message
    const handshakeData = {
      nodeId: this.localNodeId,
      channelId: this.channelId,
      timestamp: Date.now(),
      primeSetHash: this.hashPrimeSet(this.primeSet)
    };

    const header = new QuantumMessageHeader(
      QUANTUM_MESSAGE_TYPES.QUANTUM_HANDSHAKE,
      this.localNodeId,
      this.remoteNodeId,
      this.getNextSequence()
    );

    const success = await this.sendQuantumMessage(header, JSON.stringify(handshakeData));
    
    if (!success) {
      throw new Error('Quantum handshake failed');
    }

    // Wait for handshake response (simplified for demo)
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return true;
  }

  async sendQuantumMessage(header, data) {
    if (this.state !== CHANNEL_STATES.CONNECTED && header.messageType !== QUANTUM_MESSAGE_TYPES.QUANTUM_HANDSHAKE) {
      throw new Error(`Channel not connected. State: ${this.state}`);
    }

    try {
      const startTime = Date.now();
      
      // Prepare message with quantum header
      const fullMessage = this.encodeMessage(header, data);
      
      // Use existing messaging protocol for chunking and transmission
      const result = await sendMessage({
        fullMessageString: fullMessage,
        messageType: PAYLOAD_TYPES.CHAT_MESSAGE, // Reuse existing payload type
        senderAgent: this.agent,
        receiverAgent: this.remoteAgent,
        chatConfig: this.config,
        logFn: this.config.verbose ? console.log : () => {}
      });

      const endTime = Date.now();
      
      // Update health metrics
      this.health.totalMessages++;
      if (result) {
        this.health.successfulMessages++;
        this.health.latency = (this.health.latency + (endTime - startTime)) / 2;
      }
      this.updateSuccessRate();

      return result !== null;
    } catch (error) {
      this.health.totalMessages++;
      this.health.errors.push({
        timestamp: Date.now(),
        error: error.message
      });
      this.updateSuccessRate();
      throw error;
    }
  }

  async sendData(data) {
    const header = new QuantumMessageHeader(
      QUANTUM_MESSAGE_TYPES.DATA_PACKET,
      this.localNodeId,
      this.remoteNodeId,
      this.getNextSequence()
    );

    return await this.sendQuantumMessage(header, data);
  }

  async sendHeartbeat() {
    const heartbeatData = {
      timestamp: Date.now(),
      health: this.getHealthSummary()
    };

    const header = new QuantumMessageHeader(
      QUANTUM_MESSAGE_TYPES.HEARTBEAT_Q,
      this.localNodeId,
      this.remoteNodeId,
      this.getNextSequence()
    );

    try {
      await this.sendQuantumMessage(header, JSON.stringify(heartbeatData));
      this.health.lastHeartbeat = Date.now();
      return true;
    } catch (error) {
      return false;
    }
  }

  receiveMessage(binaryChunk) {
    try {
      // Decode the quantum message
      const decoded = this.agent.enhancedDecodeMessage(
        this.config.threshold,
        this.config.useAmplitudeModulation
      );

      if (!decoded) {
        return null;
      }

      // Parse the message
      const { header, data } = this.decodeMessage(decoded);
      
      // Handle duplicate messages
      if (this.receivedSequences.has(header.sequenceNumber)) {
        return null; // Already processed
      }
      
      this.receivedSequences.add(header.sequenceNumber);

      // Process based on message type
      return this.processReceivedMessage(header, data);
    } catch (error) {
      this.health.errors.push({
        timestamp: Date.now(),
        error: error.message
      });
      return null;
    }
  }

  processReceivedMessage(header, data) {
    switch (header.messageType) {
      case QUANTUM_MESSAGE_TYPES.DATA_PACKET:
        return {
          type: 'data',
          sourceNodeId: header.sourceNodeId,
          data: data,
          timestamp: Date.now()
        };

      case QUANTUM_MESSAGE_TYPES.HEARTBEAT_Q:
        this.handleHeartbeat(JSON.parse(data));
        return {
          type: 'heartbeat',
          sourceNodeId: header.sourceNodeId,
          timestamp: Date.now()
        };

      case QUANTUM_MESSAGE_TYPES.QUANTUM_HANDSHAKE:
        return {
          type: 'handshake',
          sourceNodeId: header.sourceNodeId,
          data: JSON.parse(data),
          timestamp: Date.now()
        };

      default:
        return {
          type: 'unknown',
          messageType: header.messageType,
          data: data
        };
    }
  }

  handleHeartbeat(heartbeatData) {
    // Update remote node health information
    this.health.lastHeartbeat = Date.now();
  }

  encodeMessage(header, data) {
    // Combine header and data into a single message
    const headerBinary = header.toBinary();
    const message = `${headerBinary}|${data}`;
    return message;
  }

  decodeMessage(encodedMessage) {
    // Split header and data
    const parts = encodedMessage.split('|');
    if (parts.length < 2) {
      throw new Error('Invalid message format');
    }

    const headerBinary = parts[0];
    const data = parts.slice(1).join('|'); // Rejoin in case data contains '|'

    const header = QuantumMessageHeader.fromBinary(headerBinary);
    return { header, data };
  }

  getNextSequence() {
    return ++this.sequenceNumber;
  }

  updateSuccessRate() {
    if (this.health.totalMessages > 0) {
      this.health.successRate = this.health.successfulMessages / this.health.totalMessages;
    }
  }

  getHealthSummary() {
    return {
      state: this.state,
      successRate: this.health.successRate,
      latency: this.health.latency,
      totalMessages: this.health.totalMessages,
      lastHeartbeat: this.health.lastHeartbeat,
      errorCount: this.health.errors.length
    };
  }

  isHealthy() {
    const now = Date.now();
    const heartbeatThreshold = NETWORK_CONFIG.quantumChannels.healthCheckInterval * 2;
    const minSuccessRate = NETWORK_CONFIG.quantumChannels.minSuccessRate;

    return (
      this.state === CHANNEL_STATES.CONNECTED &&
      this.health.successRate >= minSuccessRate &&
      (now - this.health.lastHeartbeat) < heartbeatThreshold
    );
  }

  hashPrimeSet(primeSet) {
    // Simple hash of prime set for verification
    return primeSet.reduce((hash, prime) => hash ^ prime, 0).toString(16);
  }

  async close() {
    this.state = CHANNEL_STATES.CLOSING;
    
    try {
      // Send closing notification if connected
      if (this.state === CHANNEL_STATES.CONNECTED) {
        // Could send a closing message here
      }
    } catch (error) {
      // Ignore errors during close
    }
    
    this.state = CHANNEL_STATES.DISCONNECTED;
    this.agent = null;
    this.remoteAgent = null;
  }
}

export class QuantumChannelManager {
  constructor(nodeId, config) {
    this.nodeId = nodeId;
    this.config = { ...NETWORK_CONFIG.quantum, ...config };
    
    this.channels = new Map(); // remoteNodeId -> QuantumChannel
    this.channelHealth = new Map();
    this.eventCallbacks = new Map();
    
    this.healthCheckTimer = null;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.startHealthMonitoring();
  }

  stop() {
    if (!this.isRunning) return;
    
    this.isRunning = false;
    
    if (this.healthCheckTimer) {
      clearInterval(this.healthCheckTimer);
      this.healthCheckTimer = null;
    }
    
    // Close all channels
    this.closeAllChannels();
  }

  async establishChannel(remoteNodeId, primeSet = null) {
    if (this.channels.has(remoteNodeId)) {
      const existingChannel = this.channels.get(remoteNodeId);
      if (existingChannel.state === CHANNEL_STATES.CONNECTED) {
        return existingChannel;
      }
    }

    // Use provided prime set or default
    const channelPrimeSet = primeSet || this.config.primes?.standard || NETWORK_CONFIG.primes.standard;
    
    const channelId = this.generateChannelId(this.nodeId, remoteNodeId);
    const channel = new QuantumChannel(
      channelId,
      this.nodeId,
      remoteNodeId,
      channelPrimeSet,
      this.config
    );

    try {
      await channel.establish();
      
      this.channels.set(remoteNodeId, channel);
      this.channelHealth.set(remoteNodeId, channel.getHealthSummary());
      
      this.emit(NETWORK_EVENTS.CHANNEL_ESTABLISHED, {
        remoteNodeId,
        channelId,
        timestamp: Date.now()
      });
      
      return channel;
    } catch (error) {
      this.emit(NETWORK_EVENTS.ERROR_OCCURRED, {
        type: 'channel_establishment_failed',
        remoteNodeId,
        error: error.message
      });
      throw error;
    }
  }

  async sendData(remoteNodeId, data) {
    const channel = this.channels.get(remoteNodeId);
    if (!channel) {
      throw new Error(`No quantum channel to node ${remoteNodeId}`);
    }

    if (!channel.isHealthy()) {
      throw new Error(`Quantum channel to ${remoteNodeId} is not healthy`);
    }

    return await channel.sendData(data);
  }

  getChannel(remoteNodeId) {
    return this.channels.get(remoteNodeId);
  }

  getChannelHealth(remoteNodeId) {
    return this.channelHealth.get(remoteNodeId);
  }

  getAllChannels() {
    return Array.from(this.channels.keys());
  }

  getHealthyChannels() {
    return Array.from(this.channels.entries())
      .filter(([_, channel]) => channel.isHealthy())
      .map(([nodeId, _]) => nodeId);
  }

  async closeChannel(remoteNodeId) {
    const channel = this.channels.get(remoteNodeId);
    if (channel) {
      await channel.close();
      this.channels.delete(remoteNodeId);
      this.channelHealth.delete(remoteNodeId);
      
      this.emit(NETWORK_EVENTS.CHANNEL_CLOSED, {
        remoteNodeId,
        timestamp: Date.now()
      });
    }
  }

  async closeAllChannels() {
    const promises = [];
    for (const remoteNodeId of this.channels.keys()) {
      promises.push(this.closeChannel(remoteNodeId));
    }
    await Promise.all(promises);
  }

  startHealthMonitoring() {
    this.healthCheckTimer = setInterval(() => {
      this.performHealthChecks();
    }, NETWORK_CONFIG.quantumChannels.healthCheckInterval);
  }

  async performHealthChecks() {
    for (const [remoteNodeId, channel] of this.channels.entries()) {
      try {
        // Send heartbeat
        await channel.sendHeartbeat();
        
        // Update health status
        const health = channel.getHealthSummary();
        this.channelHealth.set(remoteNodeId, health);
        
        // Check if channel is unhealthy
        if (!channel.isHealthy()) {
          this.emit(NETWORK_EVENTS.ERROR_OCCURRED, {
            type: 'channel_unhealthy',
            remoteNodeId,
            health
          });
        }
      } catch (error) {
        this.emit(NETWORK_EVENTS.ERROR_OCCURRED, {
          type: 'health_check_failed',
          remoteNodeId,
          error: error.message
        });
      }
    }
  }

  generateChannelId(node1, node2) {
    const sortedNodes = [node1, node2].sort();
    return `qch-${sortedNodes[0]}-${sortedNodes[1]}-${Date.now()}`;
  }

  // Event handling
  on(event, callback) {
    if (!this.eventCallbacks.has(event)) {
      this.eventCallbacks.set(event, []);
    }
    this.eventCallbacks.get(event).push(callback);
  }

  off(event, callback) {
    const callbacks = this.eventCallbacks.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit(event, data) {
    const callbacks = this.eventCallbacks.get(event);
    if (callbacks) {
      callbacks.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error in event callback for ${event}:`, error);
        }
      });
    }
  }

  // Statistics and monitoring
  getStatistics() {
    const stats = {
      totalChannels: this.channels.size,
      healthyChannels: this.getHealthyChannels().length,
      channelDetails: {}
    };

    for (const [nodeId, channel] of this.channels.entries()) {
      stats.channelDetails[nodeId] = channel.getHealthSummary();
    }

    return stats;
  }
}

export default QuantumChannelManager;