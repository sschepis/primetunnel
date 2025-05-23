import { runBreakthroughTest } from './quantum-breakthrough-test.js';

// Run with user's original parameters plus breakthrough enhancements
runBreakthroughTest({
  cycles: 12,
  delta: 0.00003,
  enablePhaseCorrection: false,
  epsilon: 0.3,
  threshold: 0.6,
  resonanceStrength: 0.08,
  messageForce: 1,
  // Add the breakthrough parameters
  messageResonanceStrength: 2.0,
  quantumFieldStrength: 1.0,
  senderStabilizationStrength: 0.8
}).then(result => {
  console.log(`\nFinal success rate: ${(result.successRate * 100).toFixed(1)}%`);
});