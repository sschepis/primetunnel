/**
 * Network Protocol Definitions for Quantum Mesh Network
 * Defines message types, headers, and protocol structures for both
 * local control plane and quantum data plane communications
 */

// Control Plane Message Types (transmitted over local network)
export const CONTROL_MESSAGE_TYPES = {
  NODE_DISCOVERY: 'discovery',
  NODE_ANNOUNCEMENT: 'announcement', 
  SYNCHRONIZATION: 'sync',
  ROUTING_UPDATE: 'routing',
  CHANNEL_NEGOTIATION: 'channel_nego',
  CHANNEL_STATUS: 'channel_status',
  HEARTBEAT: 'heartbeat',
  QUANTUM_READINESS: 'q_ready',
  NODE_LEAVING: 'leaving',
  ERROR_REPORT: 'error'
};

// Data Plane Message Types (transmitted over quantum channels)
export const QUANTUM_MESSAGE_TYPES = {
  DATA_PACKET: '000',
  ACKNOWLEDGMENT: '001',
  QUANTUM_HANDSHAKE: '010',
  CHANNEL_TEST: '011',
  ENCRYPTED_DATA: '100',
  KEY_EXCHANGE: '101',
  HEARTBEAT_Q: '110',
  RESERVED: '111'
};

// Node Capabilities Flags
export const NODE_CAPABILITIES = {
  QUANTUM_TRANSMIT: 0x01,
  QUANTUM_RECEIVE: 0x02,
  ENCRYPTION: 0x04,
  ROUTING: 0x08,
  MONITORING: 0x10,
  HIGH_SECURITY: 0x20
};

// Channel States
export const CHANNEL_STATES = {
  DISCONNECTED: 'disconnected',
  CONNECTING: 'connecting',
  HANDSHAKING: 'handshaking',
  CONNECTED: 'connected',
  ERROR: 'error',
  CLOSING: 'closing'
};

// Network Event Types
export const NETWORK_EVENTS = {
  NODE_JOINED: 'node_joined',
  NODE_LEFT: 'node_left',
  CHANNEL_ESTABLISHED: 'channel_established',
  CHANNEL_CLOSED: 'channel_closed',
  MESSAGE_RECEIVED: 'message_received',
  TOPOLOGY_CHANGED: 'topology_changed',
  ERROR_OCCURRED: 'error_occurred'
};

/**
 * Control Message Structure
 */
export class ControlMessage {
  constructor(type, sourceNodeId, data = {}) {
    this.version = '1.0.0';
    this.type = type;
    this.sourceNodeId = sourceNodeId;
    this.timestamp = Date.now();
    this.messageId = this.generateMessageId();
    this.data = data;
  }

  generateMessageId() {
    return `${this.sourceNodeId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  toJSON() {
    return {
      version: this.version,
      type: this.type,
      sourceNodeId: this.sourceNodeId,
      timestamp: this.timestamp,
      messageId: this.messageId,
      data: this.data
    };
  }

  static fromJSON(json) {
    const msg = new ControlMessage(json.type, json.sourceNodeId, json.data);
    msg.version = json.version;
    msg.timestamp = json.timestamp;
    msg.messageId = json.messageId;
    return msg;
  }
}

/**
 * Node Discovery Message Data
 */
export class NodeDiscoveryData {
  constructor(nodeId, capabilities, primeSupport, networkId) {
    this.nodeId = nodeId;
    this.capabilities = capabilities;
    this.primeSupport = primeSupport;
    this.networkId = networkId;
    this.maxConnections = 16;
    this.currentConnections = 0;
    this.quantumChannelVersion = '1.0.0';
  }
}

/**
 * Synchronization Message Data
 */
export class SynchronizationData {
  constructor(nodeId, clockOffset, quantumStateHash, primeConfiguration) {
    this.nodeId = nodeId;
    this.clockOffset = clockOffset;
    this.quantumStateHash = quantumStateHash;
    this.primeConfiguration = primeConfiguration;
    this.synchronizationTime = Date.now();
    this.protocolVersion = '1.0.0';
  }
}

/**
 * Channel Negotiation Message Data
 */
export class ChannelNegotiationData {
  constructor(sourceNodeId, targetNodeId, primeSet, frequencies, encryptionParams) {
    this.sourceNodeId = sourceNodeId;
    this.targetNodeId = targetNodeId;
    this.primeSet = primeSet;
    this.frequencies = frequencies;
    this.encryptionParams = encryptionParams;
    this.channelId = this.generateChannelId();
    this.negotiationTime = Date.now();
  }

  generateChannelId() {
    const sortedNodes = [this.sourceNodeId, this.targetNodeId].sort();
    return `ch-${sortedNodes[0]}-${sortedNodes[1]}-${Date.now()}`;
  }
}

/**
 * Quantum Message Header Structure
 */
export class QuantumMessageHeader {
  constructor(messageType, sourceNodeId, targetNodeId, sequenceNumber = 0) {
    this.messageType = messageType;
    this.sourceNodeId = sourceNodeId;
    this.targetNodeId = targetNodeId;
    this.sequenceNumber = sequenceNumber;
    this.timestamp = Date.now();
    this.flags = 0;
  }

  setFlag(flag) {
    this.flags |= flag;
  }

  hasFlag(flag) {
    return (this.flags & flag) !== 0;
  }

  toBinary() {
    // Convert header to binary representation for quantum transmission
    // This would extend the existing chunking protocol from messaging.js
    const typeBits = this.messageType; // 3 bits
    const seqBits = this.sequenceNumber.toString(2).padStart(8, '0'); // 8 bits
    const flagBits = this.flags.toString(2).padStart(4, '0'); // 4 bits
    
    return typeBits + seqBits + flagBits; // 15 bits total
  }

  static fromBinary(binaryString) {
    const messageType = binaryString.substring(0, 3);
    const sequenceNumber = parseInt(binaryString.substring(3, 11), 2);
    const flags = parseInt(binaryString.substring(11, 15), 2);
    
    const header = new QuantumMessageHeader(messageType, '', '', sequenceNumber);
    header.flags = flags;
    return header;
  }
}

/**
 * Network Topology Information
 */
export class NetworkTopology {
  constructor() {
    this.nodes = new Map(); // nodeId -> NodeInfo
    this.connections = new Map(); // connectionId -> ConnectionInfo
    this.lastUpdate = Date.now();
  }

  addNode(nodeId, nodeInfo) {
    this.nodes.set(nodeId, {
      ...nodeInfo,
      lastSeen: Date.now(),
      status: 'active'
    });
    this.lastUpdate = Date.now();
  }

  removeNode(nodeId) {
    this.nodes.delete(nodeId);
    // Remove all connections involving this node
    for (const [connId, connInfo] of this.connections.entries()) {
      if (connInfo.node1 === nodeId || connInfo.node2 === nodeId) {
        this.connections.delete(connId);
      }
    }
    this.lastUpdate = Date.now();
  }

  addConnection(node1, node2, connectionInfo) {
    const connId = this.generateConnectionId(node1, node2);
    this.connections.set(connId, {
      node1,
      node2,
      ...connectionInfo,
      established: Date.now(),
      status: 'active'
    });
    this.lastUpdate = Date.now();
  }

  generateConnectionId(node1, node2) {
    const sortedNodes = [node1, node2].sort();
    return `conn-${sortedNodes[0]}-${sortedNodes[1]}`;
  }

  getActiveNodes() {
    return Array.from(this.nodes.entries())
      .filter(([_, info]) => info.status === 'active')
      .map(([nodeId, _]) => nodeId);
  }

  getConnectedNodes(nodeId) {
    const connected = [];
    for (const [_, connInfo] of this.connections.entries()) {
      if (connInfo.node1 === nodeId && connInfo.status === 'active') {
        connected.push(connInfo.node2);
      } else if (connInfo.node2 === nodeId && connInfo.status === 'active') {
        connected.push(connInfo.node1);
      }
    }
    return connected;
  }

  toJSON() {
    return {
      nodes: Object.fromEntries(this.nodes),
      connections: Object.fromEntries(this.connections),
      lastUpdate: this.lastUpdate
    };
  }
}

/**
 * Protocol Validation Functions
 */
export class ProtocolValidator {
  static validateControlMessage(message) {
    if (!message.version || !message.type || !message.sourceNodeId) {
      return false;
    }
    
    if (!Object.values(CONTROL_MESSAGE_TYPES).includes(message.type)) {
      return false;
    }
    
    if (!message.timestamp || typeof message.timestamp !== 'number') {
      return false;
    }
    
    return true;
  }

  static validateQuantumHeader(header) {
    if (!Object.values(QUANTUM_MESSAGE_TYPES).includes(header.messageType)) {
      return false;
    }
    
    if (typeof header.sequenceNumber !== 'number' || header.sequenceNumber < 0) {
      return false;
    }
    
    return true;
  }

  static validateNodeCapabilities(capabilities) {
    const validCapabilities = Object.values(NODE_CAPABILITIES);
    return (capabilities & validCapabilities.reduce((acc, cap) => acc | cap, 0)) === capabilities;
  }
}

export default {
  CONTROL_MESSAGE_TYPES,
  QUANTUM_MESSAGE_TYPES,
  NODE_CAPABILITIES,
  CHANNEL_STATES,
  NETWORK_EVENTS,
  ControlMessage,
  NodeDiscoveryData,
  SynchronizationData,
  ChannelNegotiationData,
  QuantumMessageHeader,
  NetworkTopology,
  ProtocolValidator
};