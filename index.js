// Main entry point for the prime-tunnel-communication package

// Core quantum state and metrics
export { PrimeState, Metrics } from './src/prime-resonance.js';

// Public interface for nonlocal communication
export {
  initializeAgent,
  sendMessage,
  evolveAgent,
  measureAgent,
  decodeMessage,
  getConfig,
  updateConfig,
  resetAgent,
} from './src/nonlocal-comms.js';

// Configuration (optional, can be accessed via getConfig/updateConfig)
export { CONFIG, DIRECT_CONFIG } from './src/config.js';

// Simulation entry points (for testing/demonstration)
export { runEvolutionTest, runDirectTest } from './src/core.js';