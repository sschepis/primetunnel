/**
 * Quantum measurement and metrics calculations
 */

/**
 * Metrics class for quantum state analysis
 */
export class Metrics {
  /**
   * Calculate resonance strength between two quantum states
   * @param {Object} state - Current quantum state (PrimeState object)
   * @param {Object} reference - Reference quantum state (PrimeState object)
   * @returns {number} Resonance strength value [0, 1]
   */
  static resonanceStrength(state, reference) {
    if (!state || !state.primeBases || !reference || !reference.primeBases || 
        state.primeBases.length !== reference.primeBases.length) {
      return 0;
    }
    
    let totalCloseness = 0;
    let numComparisons = 0;

    for (let i = 0; i < state.primeBases.length; i++) {
      const basisState = state.primeBases[i];
      const basisRef = reference.primeBases[i];

      if (basisState.pulsars.length > 0 && basisState.pulsars.length === basisRef.pulsars.length) {
        // Compare composite phases of the prime bases
        let delta = Math.abs(basisState.compositePhase - basisRef.compositePhase) % (2 * Math.PI);
        delta = Math.min(delta, 2 * Math.PI - delta); // shortest angle
        const closeness = 1 - delta / Math.PI; // 1 for identical, 0 for PI apart
        totalCloseness += closeness;
        numComparisons++;
      }
    }
    
    return numComparisons > 0 ? totalCloseness / numComparisons : 0;
  }

  /**
   * Calculate entropy of a quantum state based on amplitude distribution
   * @param {Object} state - Quantum state (PrimeState object)
   * @returns {number} Entropy value
   */
  static entropy(state) {
    if (!state || !state.primeBases) return 0;
    
    // Calculate entropy based on the distribution of composite amplitudes of prime bases
    const compositeAmplitudes = state.primeBases.map(basis => basis.compositeAmplitude);
    const probs = compositeAmplitudes.map(a => a * a); // Probabilities are square of amplitudes
    
    let entropyVal = 0;
    probs.forEach(p => {
      if (p > 1e-9) { // Avoid log(0)
        entropyVal -= p * Math.log2(p);
      }
    });
    
    return entropyVal;
  }

  /**
   * Calculate phase coherence across all prime bases
   * @param {Object} state - Quantum state (PrimeState object)
   * @returns {number} Phase coherence measure [0, 1]
   */
  static phaseCoherence(state) {
    if (!state || !state.primeBases || state.primeBases.length < 2) return 1;
    
    const phases = state.primeBases.map(basis => basis.compositePhase);
    let totalVariance = 0;
    const meanPhase = phases.reduce((sum, p) => sum + p, 0) / phases.length;
    
    for (const phase of phases) {
      let diff = phase - meanPhase;
      // Handle circular nature of phases
      if (diff > Math.PI) diff -= 2 * Math.PI;
      if (diff < -Math.PI) diff += 2 * Math.PI;
      totalVariance += diff * diff;
    }
    
    const variance = totalVariance / phases.length;
    // Convert variance to coherence measure (lower variance = higher coherence)
    return Math.exp(-variance);
  }
}