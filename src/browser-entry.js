/**
 * Browser entry point for the quantum communication library
 * Exports the main classes and functions for browser usage
 */

// Export core quantum functionality
export { PrimeState } from './quantum/prime-state.js';
export { QuantumCommunicationAgent } from './communication/quantum-communication-agent.js';
export { CommunicationAgent } from './communication/communication-agent.js';

// Export utilities
export { log } from './utils/logger.js';
export { 
  calculateInitialPulsarPhase, 
  idealPhaseDifference, 
  normalizePhase,
  shortestAngleDifference,
  calculateCircularMean,
  GOLDEN_RATIO 
} from './utils/phase-utils.js';

// Export mathematical functions
export { Metrics } from './math/quantum-metrics.js';
export { 
  normalizeAllPulsarAmplitudes,
  updateCompositeAmplitudes,
  initializeNormalizedAmplitudes 
} from './math/normalization.js';

// Export evolution functionality
export { evolveQuantumState } from './quantum/quantum-evolution.js';

// Export testing functionality for browser-based testing
export { runDirectTest } from './testing/direct-test.js';
export { runEvolutionTest } from './testing/evolution-test.js';
export { runComprehensiveTests } from './testing/test-runner.js';

// Export configuration
export { CONFIG, DIRECT_CONFIG } from './config.js';

// Export pulsar data
export { pulsarsByPrimes } from './pulsar-frequencies.js';