/**
 * Core quantum state management for prime-based communication
 */

import { calculateInitialPulsarPhase, calculateCircularMean, normalizePhase } from '../utils/phase-utils.js';
import { normalizeAllPulsarAmplitudes, updateCompositeAmplitudes, initializeNormalizedAmplitudes } from '../math/normalization.js';

/**
 * Represents the quantum state of a prime-based communication system
 */
export class PrimeState {
  /**
   * Create a new PrimeState instance
   * @param {Array} sharedPrimeNumbersArray - Array of prime numbers to use as bases
   * @param {Object} groupedPulsarData - Pulsar data grouped by prime numbers
   * @param {Function} initialPulsarPhaseFunc - Function to calculate initial pulsar phases
   * @param {Object} agentConfig - Configuration for the agent
   */
  constructor(sharedPrimeNumbersArray, groupedPulsarData, initialPulsarPhaseFunc, agentConfig) {
    this.primeBases = [];
    this.initializePrimeBases(sharedPrimeNumbersArray, groupedPulsarData, initialPulsarPhaseFunc, agentConfig);
  }

  /**
   * Initialize prime bases with pulsars
   * @param {Array} sharedPrimeNumbersArray - Array of prime numbers
   * @param {Object} groupedPulsarData - Grouped pulsar data
   * @param {Function} initialPulsarPhaseFunc - Phase initialization function
   * @param {Object} agentConfig - Agent configuration
   */
  initializePrimeBases(sharedPrimeNumbersArray, groupedPulsarData, initialPulsarPhaseFunc, agentConfig) {
    const numPrimeBases = sharedPrimeNumbersArray.length;

    for (const primeNum of sharedPrimeNumbersArray) {
      const compositeAmplitudeForBasis = numPrimeBases > 0 ? 1 / Math.sqrt(numPrimeBases) : 0;
      const currentPrimeBasis = {
        originalPrime: primeNum,
        pulsars: [],
        compositePhase: 0, // Will be updated
        compositeAmplitude: compositeAmplitudeForBasis,
      };

      const rawPulsarsForThisBasis = groupedPulsarData[primeNum.toString()] || [];

      if (rawPulsarsForThisBasis.length > 0) {
        this.initializeRealPulsars(currentPrimeBasis, rawPulsarsForThisBasis, initialPulsarPhaseFunc, compositeAmplitudeForBasis);
      } else {
        this.initializeConceptualPulsar(currentPrimeBasis, primeNum, initialPulsarPhaseFunc, compositeAmplitudeForBasis);
      }
      
      this.primeBases.push(currentPrimeBasis);
    }
  }

  /**
   * Initialize real pulsars for a prime basis
   * @param {Object} primeBasis - Prime basis object
   * @param {Array} rawPulsarsForThisBasis - Raw pulsar data
   * @param {Function} initialPulsarPhaseFunc - Phase initialization function
   * @param {number} compositeAmplitudeForBasis - Composite amplitude for this basis
   */
  initializeRealPulsars(primeBasis, rawPulsarsForThisBasis, initialPulsarPhaseFunc, compositeAmplitudeForBasis) {
    const numPulsarsInBasis = rawPulsarsForThisBasis.length;
    
    for (const rawPulsar of rawPulsarsForThisBasis) {
      const pulsarId = rawPulsar.PSRJ;
      const pulsarFrequency = rawPulsar.Frequency_Hz;
      const pulsarInitialPhase = initialPulsarPhaseFunc(pulsarFrequency);
      // Distribute the basis's composite amplitude among its constituent pulsars
      const pulsarInitialAmplitude = numPulsarsInBasis > 0 ? 
        compositeAmplitudeForBasis / Math.sqrt(numPulsarsInBasis) : 0;

      primeBasis.pulsars.push({
        id: pulsarId,
        frequency: pulsarFrequency,
        phase: pulsarInitialPhase,
        amplitude: pulsarInitialAmplitude,
      });
    }
    
    // Set initial composite phase based on the first pulsar, if any
    primeBasis.compositePhase = primeBasis.pulsars[0] ? primeBasis.pulsars[0].phase : 0;
  }

  /**
   * Initialize a conceptual pulsar when no real pulsars are found
   * @param {Object} primeBasis - Prime basis object
   * @param {number} primeNum - Prime number
   * @param {Function} initialPulsarPhaseFunc - Phase initialization function
   * @param {number} compositeAmplitudeForBasis - Composite amplitude for this basis
   */
  initializeConceptualPulsar(primeBasis, primeNum, initialPulsarPhaseFunc, compositeAmplitudeForBasis) {
    // Handle case with no specific pulsars found for this prime - create a conceptual one
    const conceptualFrequency = primeNum; // Use prime number as a stand-in frequency
    const conceptualPhase = initialPulsarPhaseFunc(conceptualFrequency);
    
    primeBasis.pulsars.push({
      id: `conceptual_${primeNum}`,
      frequency: conceptualFrequency,
      phase: conceptualPhase,
      amplitude: compositeAmplitudeForBasis, // The conceptual pulsar gets the full basis amplitude
    });
    
    primeBasis.compositePhase = conceptualPhase;
  }

  /**
   * Modulate the phase of a specific prime basis
   * @param {number} basisIndex - Index of the basis to modulate
   * @param {string} bit - Bit value ('0' or '1')
   * @param {number} epsilon - Phase modulation amount
   * @param {Object} referenceBasisState - Reference state for this basis
   */
  modulatePrimeBasisPhase(basisIndex, bit, epsilon, referenceBasisState) {
    const primeBasisToModulate = this.primeBases[basisIndex];
    if (!primeBasisToModulate || !referenceBasisState) return;

    for (let k = 0; k < primeBasisToModulate.pulsars.length; k++) {
      const pulsar_k = primeBasisToModulate.pulsars[k];
      const referencePulsar_k = referenceBasisState.pulsars[k]; // Assumes pulsars are in same order & count

      if (!referencePulsar_k) continue; // Safety check

      let targetPulsarPhase;
      if (bit === '1') {
        targetPulsarPhase = (referencePulsar_k.phase + epsilon);
      } else { // Assumed '0'
        targetPulsarPhase = referencePulsar_k.phase;
      }
      pulsar_k.phase = normalizePhase(targetPulsarPhase);
    }

    // Recalculate compositePhase for the modulated basis
    this.updateCompositePhase(primeBasisToModulate);
  }

  /**
   * Update composite phase for a prime basis
   * @param {Object} primeBasis - Prime basis to update
   */
  updateCompositePhase(primeBasis) {
    if (primeBasis.pulsars.length > 0) {
      primeBasis.compositePhase = calculateCircularMean(primeBasis.pulsars);
    } else {
      primeBasis.compositePhase = 0;
    }
  }

  /**
   * Normalize all pulsar amplitudes globally
   */
  normalizeAllPulsarAmplitudes() {
    normalizeAllPulsarAmplitudes(this.primeBases);
    updateCompositeAmplitudes(this.primeBases);
  }

  /**
   * Create a deep clone of this PrimeState
   * @returns {PrimeState} Cloned state
   */
  clone() {
    // Deep clone for the new structure
    const clonedPrimeBases = this.primeBases.map(basis => ({
      ...basis, // copy originalPrime, compositePhase, compositeAmplitude
      pulsars: basis.pulsars.map(pulsar => ({ ...pulsar })), // copy individual pulsar states
    }));
    
    // Create new instance without calling constructor
    const clonedState = Object.create(PrimeState.prototype);
    clonedState.primeBases = clonedPrimeBases;
    return clonedState;
  }
}