/**
 * Network Configuration for Quantum Mesh Network
 * Defines core parameters for both local and quantum network layers
 */

export const NETWORK_CONFIG = {
  // Local Network Configuration (Control Plane)
  localNetwork: {
    discoveryPort: 8080,
    heartbeatInterval: 5000,     // 5 seconds
    nodeTimeout: 15000,          // 15 seconds
    maxRetries: 3,
    discoveryTimeout: 2000,      // 2 seconds
    syncTimeout: 10000,          // 10 seconds
  },

  // Quantum Channel Configuration (Data Plane)
  quantumChannels: {
    defaultPrimeCount: 32,
    maxConcurrentChannels: 16,
    channelTimeout: 30000,       // 30 seconds
    handshakeTimeout: 10000,     // 10 seconds
    healthCheckInterval: 10000,  // 10 seconds
    minSuccessRate: 0.7,         // 70% success rate threshold
  },

  // Mesh Network Configuration
  mesh: {
    maxNodes: 64,
    routingUpdateInterval: 30000, // 30 seconds
    topologyTimeout: 60000,       // 1 minute
    redundantChannels: 2,         // Number of backup channels per node pair
  },

  // Prime Configuration for Quantum Channels
  primes: {
    // Default prime sets for different security levels
    standard: [
      1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049,
      1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097,
      1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163,
      1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223
    ],
    
    high_security: [
      1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283,
      1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321,
      1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423,
      1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459
    ]
  },

  // Quantum Communication Parameters
  quantum: {
    epsilon: 0.4,
    threshold: 0.25,
    delta: 0.001,
    cycles: 5,
    messageForce: 25,
    resonanceStrength: 0.1,
    enablePhaseCorrection: true,
    correctionInterval: 1,
    correctionStrength: 1.0,
    useAmplitudeModulation: false,
    amplitudeEpsilon: 0.1,
    maxPulsarsPerPrime: 3,
    amplitudeCouplingStrength: 0.5,
    intraBasisCoherenceStrength: 0.05
  }
};

export const PROTOCOL_VERSIONS = {
  MESH_PROTOCOL: '1.0.0',
  QUANTUM_PROTOCOL: '1.0.0',
  CONTROL_PROTOCOL: '1.0.0'
};

export const DEFAULT_CONFIG = {
  ...NETWORK_CONFIG,
  nodeId: null, // Must be set by user
  networkId: 'default-mesh',
  verbose: false,
  enableEncryption: true,
  securityLevel: 'standard' // 'standard' or 'high_security'
};