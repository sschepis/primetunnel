/**
 * Prime Resonance Module - Compatibility Layer
 * 
 * This file now serves as a compatibility layer for the refactored quantum communication system.
 * The original functionality has been broken down into focused, modular components:
 * 
 * - Quantum state management -> src/quantum/
 * - Mathematical operations -> src/math/
 * - Utilities -> src/utils/
 * - Communication logic -> src/communication/
 * 
 * This module re-exports the main classes and functions for backward compatibility.
 */

// Import utilities first to use in PrimeStateStatics
import {
  calculateInitialPulsarPhase,
  idealPhaseDifference,
  normalizePhase,
  shortestAngleDifference,
  calculateCircularMean,
  GOLDEN_RATIO
} from './utils/phase-utils.js';

// Re-export core quantum state management
export { PrimeState } from './quantum/prime-state.js';

// Re-export metrics functionality
export { Metrics } from './math/quantum-metrics.js';

// Re-export communication agents
export { CommunicationAgent } from './communication/communication-agent.js';
export { QuantumCommunicationAgent } from './communication/quantum-communication-agent.js';

// Re-export utilities for convenience
export {
  calculateInitialPulsarPhase,
  idealPhaseDifference,
  normalizePhase,
  shortestAngleDifference,
  calculateCircularMean,
  GOLDEN_RATIO
};

export {
  normalizeAllPulsarAmplitudes,
  updateCompositeAmplitudes,
  initializeNormalizedAmplitudes
} from './math/normalization.js';

// Re-export evolution functionality
export { evolveQuantumState } from './quantum/quantum-evolution.js';

// Import the pulsar data for backward compatibility
export { pulsarsByPrimes } from './pulsar-frequencies.js';

/**
 * Legacy compatibility - static methods from original PrimeState class
 * These are now handled by the utils modules but kept here for compatibility
 */
export const PrimeStateStatics = {
  goldenRatio: GOLDEN_RATIO,
  calculateInitialPulsarPhase: calculateInitialPulsarPhase,
  idealPhaseDifference: idealPhaseDifference
};

// Note: The original large PrimeState.evolve() method has been extracted to
// src/quantum/quantum-evolution.js as evolveQuantumState() for better modularity.
// The original Metrics class has been moved to src/math/quantum-metrics.js
// The original CommunicationAgent class has been moved to src/communication/communication-agent.js