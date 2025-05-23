/**
 * Quantum Mesh Network - Main Entry Point
 * Exports core components for quantum mesh networking
 */

// Core Components
export { default as QuantumMeshNode } from './src/network/mesh-node.js';
export { default as QuantumChannelManager } from './src/network/quantum-channel-manager.js';
export { default as LocalNetworkManager } from './src/network/local-network-manager.js';

// Configuration
export { NETWORK_CONFIG, DEFAULT_CONFIG } from './src/config/network-config.js';

// Protocol Definitions
export {
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
} from './src/network/network-protocol.js';

// Demo and Examples
export { default as MeshNetworkDemo } from './examples/simple-mesh-demo.js';

// Version
export const VERSION = '1.0.0';