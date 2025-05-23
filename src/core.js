/**
 * Nonlocal Communication Test
 * Main entry point that orchestrates quantum communication tests
 * 
 * This file now serves as a compatibility layer and main orchestrator,
 * importing functionality from the refactored modular structure.
 */

// Import the refactored modules
export { QuantumCommunicationAgent } from './communication/quantum-communication-agent.js';
export { runDirectTest } from './testing/direct-test.js';
export { runEvolutionTest } from './testing/evolution-test.js';
export { runComprehensiveTests } from './testing/test-runner.js';

// Re-export utilities for backward compatibility
export { log } from './utils/logger.js';
export { PrimeState } from './quantum/prime-state.js';
export { CommunicationAgent } from './communication/communication-agent.js';
export { Metrics } from './math/quantum-metrics.js';

// Re-export phase utilities
export { 
  calculateInitialPulsarPhase, 
  idealPhaseDifference, 
  normalizePhase,
  shortestAngleDifference,
  calculateCircularMean,
  GOLDEN_RATIO 
} from './utils/phase-utils.js';

// Re-export normalization utilities
export { 
  normalizeAllPulsarAmplitudes,
  updateCompositeAmplitudes,
  initializeNormalizedAmplitudes 
} from './math/normalization.js';

// Re-export evolution functionality
export { evolveQuantumState } from './quantum/quantum-evolution.js';
