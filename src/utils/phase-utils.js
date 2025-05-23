/**
 * Phase manipulation utilities for quantum communication
 */

/**
 * The golden ratio constant used in phase calculations
 */
export const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

/**
 * Calculate initial pulsar phase based on frequency using golden ratio
 * @param {number} frequency - The pulsar frequency
 * @returns {number} Initial phase value in radians [0, 2π)
 */
export function calculateInitialPulsarPhase(frequency) {
  // Added small epsilon to avoid log(0) or log of negative if frequency is 0 or invalid
  return ((2 * Math.PI * Math.log(frequency + 1e-9)) / GOLDEN_RATIO) % (2 * Math.PI);
}

/**
 * Calculate ideal phase difference between two prime numbers
 * @param {number} p1 - First prime number
 * @param {number} p2 - Second prime number
 * @returns {number} Ideal phase difference in radians
 */
export function idealPhaseDifference(p1, p2) {
  const harmonic = ((p1 - p2) / (p1 + p2)) * Math.PI / GOLDEN_RATIO;
  return harmonic % (2 * Math.PI);
}

/**
 * Normalize a phase angle to [0, 2π) range
 * @param {number} phase - Phase angle in radians
 * @returns {number} Normalized phase in [0, 2π) range
 */
export function normalizePhase(phase) {
  return (phase % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
}

/**
 * Calculate the shortest angular distance between two phases
 * @param {number} phase1 - First phase in radians
 * @param {number} phase2 - Second phase in radians
 * @returns {number} Shortest angular distance (-π, π]
 */
export function shortestAngleDifference(phase1, phase2) {
  let diff = phase1 - phase2;
  while (diff > Math.PI) diff -= 2 * Math.PI;
  while (diff <= -Math.PI) diff += 2 * Math.PI;
  return diff;
}

/**
 * Calculate amplitude-weighted circular mean of phases
 * @param {Array} pulsars - Array of pulsar objects with phase and amplitude properties
 * @returns {number} Circular mean phase in [0, 2π) range
 */
export function calculateCircularMean(pulsars) {
  if (!pulsars || pulsars.length === 0) return 0;
  
  let sumWeightedPhasesX = 0;
  let sumWeightedPhasesY = 0;
  let sumWeights = 0;

  for (const pulsar of pulsars) {
    const weight = pulsar.amplitude || 1;
    sumWeightedPhasesX += weight * Math.cos(pulsar.phase);
    sumWeightedPhasesY += weight * Math.sin(pulsar.phase);
    sumWeights += weight;
  }

  if (sumWeights > 1e-9) {
    const meanPhase = Math.atan2(sumWeightedPhasesY / sumWeights, sumWeightedPhasesX / sumWeights);
    return normalizePhase(meanPhase);
  } else {
    // Fallback to simple average if all weights are zero
    const sumPhases = pulsars.reduce((sum, p) => sum + p.phase, 0);
    return normalizePhase(sumPhases / pulsars.length);
  }
}