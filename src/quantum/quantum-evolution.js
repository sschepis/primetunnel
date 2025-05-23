/**
 * Quantum evolution algorithms for prime-based communication systems
 */

import { idealPhaseDifference, shortestAngleDifference, normalizePhase, calculateCircularMean } from '../utils/phase-utils.js';
import { normalizeAllPulsarAmplitudes, updateCompositeAmplitudes } from '../math/normalization.js';

/**
 * Evolve quantum state over time with multiple physical forces
 * @param {Object} primeState - PrimeState object to evolve
 * @param {number} dt - Time step for evolution
 * @param {Object} config - Evolution configuration parameters
 * @param {string} messageBits - Message bits for attractor force (empty for receiver)
 * @param {Array} referenceStatePrimeBases - Reference state for message attractor
 */
export function evolveQuantumState(primeState, dt, config, messageBits, referenceStatePrimeBases) {
  if (!primeState.primeBases || primeState.primeBases.length === 0) return;

  const numBases = primeState.primeBases.length;

  // Step 1: Amplitude Evolution
  evolveAmplitudes(primeState, dt, config, messageBits, numBases);

  // Step 2: Phase Evolution  
  evolvePhases(primeState, dt, config, messageBits, referenceStatePrimeBases, numBases);
}

/**
 * Evolve amplitudes of individual pulsars based on message alignment
 * @param {Object} primeState - PrimeState object
 * @param {number} dt - Time step
 * @param {Object} config - Configuration object
 * @param {string} messageBits - Message bits
 * @param {number} numBases - Number of prime bases
 */
function evolveAmplitudes(primeState, dt, config, messageBits, numBases) {
  // Create temporary states for intermediate calculations
  const tempPulsarStatesForAmplitude = primeState.primeBases.flatMap(basis =>
    basis.pulsars.map(p => ({ ...p })) // Create shallow copies for intermediate calculations
  );
  let flatPulsarIndex = 0;

  for (let i = 0; i < numBases; i++) {
    const primeBasis = primeState.primeBases[i];
    const messageBitForBasis = (messageBits && i < messageBits.length) ? messageBits[i] : null;

    for (let k = 0; k < primeBasis.pulsars.length; k++) {
      const currentPulsar = primeBasis.pulsars[k]; // Evolve based on current state
      const tempPulsar = tempPulsarStatesForAmplitude[flatPulsarIndex];

      if (messageBitForBasis !== null) {
        let alignment = 0;
        if (messageBitForBasis === '1') {
          alignment = -Math.sin(currentPulsar.phase);
        } else { // '0'
          alignment = Math.sin(currentPulsar.phase);
        }
        const effectiveCoupling = (config.amplitudeCouplingStrength || 0.5) * 
          ((config.messageAttractorForceStrength || 5.0) / primeBasis.originalPrime);
        tempPulsar.amplitude = currentPulsar.amplitude * Math.exp(alignment * effectiveCoupling * dt);
      } else {
        tempPulsar.amplitude = currentPulsar.amplitude; // No change if no message bit
      }
      flatPulsarIndex++;
    }
  }
  
  // Normalize these temporary new amplitudes globally
  let sumOfSquares = tempPulsarStatesForAmplitude.reduce((sum, p) => sum + p.amplitude * p.amplitude, 0);
  if (sumOfSquares > 1e-9) {
    const normFactor = Math.sqrt(sumOfSquares);
    tempPulsarStatesForAmplitude.forEach(p => p.amplitude /= normFactor);
  }

  // Apply normalized amplitudes back and recalculate composite amplitudes
  flatPulsarIndex = 0;
  primeState.primeBases.forEach(basis => {
    let basisSumSqAmp = 0;
    basis.pulsars.forEach(p => {
      p.amplitude = tempPulsarStatesForAmplitude[flatPulsarIndex].amplitude;
      basisSumSqAmp += p.amplitude * p.amplitude;
      flatPulsarIndex++;
    });
    basis.compositeAmplitude = Math.sqrt(basisSumSqAmp);
  });
}

/**
 * Evolve phases with multiple force components
 * @param {Object} primeState - PrimeState object
 * @param {number} dt - Time step
 * @param {Object} config - Configuration object
 * @param {string} messageBits - Message bits
 * @param {Array} referenceStatePrimeBases - Reference state
 * @param {number} numBases - Number of prime bases
 */
function evolvePhases(primeState, dt, config, messageBits, referenceStatePrimeBases, numBases) {
  const pulsarDeltaPhases = new Map(); // Store {pulsarRef: deltaPhase}
  
  // Calculate inter-basis resonance tendencies
  const compositePhaseTendencies = calculateInterBasisResonance(primeState, dt, config, numBases);
  
  // Calculate individual pulsar phase deltas
  calculatePulsarPhaseDeltas(primeState, dt, config, messageBits, referenceStatePrimeBases, 
                           compositePhaseTendencies, pulsarDeltaPhases, numBases);
  
  // Apply phase updates and recalculate composite phases
  applyPhaseUpdates(primeState, pulsarDeltaPhases);
}

/**
 * Calculate inter-basis resonance component
 * @param {Object} primeState - PrimeState object
 * @param {number} dt - Time step
 * @param {Object} config - Configuration object
 * @param {number} numBases - Number of prime bases
 * @returns {Map} Composite phase tendencies for each basis
 */
function calculateInterBasisResonance(primeState, dt, config, numBases) {
  const compositePhaseTendencies = new Map();
  
  for (let i = 0; i < numBases; i++) {
    const primeBasis_i = primeState.primeBases[i];
    let interBasisResonanceComponent = 0;
    
    for (let j = 0; j < numBases; j++) {
      if (i === j) continue;
      const primeBasis_j = primeState.primeBases[j];
      const actualCompositeDelta = primeBasis_i.compositePhase - primeBasis_j.compositePhase;
      const idealCompositeDelta = idealPhaseDifference(primeBasis_i.originalPrime, primeBasis_j.originalPrime);
      interBasisResonanceComponent += Math.sin(actualCompositeDelta - idealCompositeDelta);
    }
    
    const compositePhaseDelta_i = -dt * (config.interBasisResonanceStrength || 0.1) * interBasisResonanceComponent;
    compositePhaseTendencies.set(primeBasis_i, compositePhaseDelta_i);
  }
  
  return compositePhaseTendencies;
}

/**
 * Calculate phase deltas for individual pulsars
 * @param {Object} primeState - PrimeState object
 * @param {number} dt - Time step
 * @param {Object} config - Configuration object
 * @param {string} messageBits - Message bits
 * @param {Array} referenceStatePrimeBases - Reference state
 * @param {Map} compositePhaseTendencies - Composite phase tendencies
 * @param {Map} pulsarDeltaPhases - Output map for phase deltas
 * @param {number} numBases - Number of prime bases
 */
function calculatePulsarPhaseDeltas(primeState, dt, config, messageBits, referenceStatePrimeBases, 
                                  compositePhaseTendencies, pulsarDeltaPhases, numBases) {
  for (let i = 0; i < numBases; i++) {
    const primeBasis_i = primeState.primeBases[i];
    const referenceBasis_i = referenceStatePrimeBases ? referenceStatePrimeBases[i] : null;
    const compositeTendency = compositePhaseTendencies.get(primeBasis_i) || 0;

    for (let k = 0; k < primeBasis_i.pulsars.length; k++) {
      const pulsar_k = primeBasis_i.pulsars[k];
      let totalDeltaPhaseForPulsarK = 0;

      // Natural drift
      totalDeltaPhaseForPulsarK += pulsar_k.frequency * dt;

      // Message attractor contribution
      totalDeltaPhaseForPulsarK += calculateMessageAttractorForce(
        pulsar_k, messageBits, i, referenceBasis_i, k, config, primeBasis_i, dt
      );

      // Intra-basis coherence force
      totalDeltaPhaseForPulsarK += calculateIntraBasisCoherence(
        pulsar_k, primeBasis_i, compositeTendency, config, dt
      );
      
      pulsarDeltaPhases.set(pulsar_k, totalDeltaPhaseForPulsarK);
    }
  }
}

/**
 * Calculate message attractor force for a pulsar
 * @param {Object} pulsar - Pulsar object
 * @param {string} messageBits - Message bits
 * @param {number} basisIndex - Basis index
 * @param {Object} referenceBasis - Reference basis
 * @param {number} pulsarIndex - Pulsar index
 * @param {Object} config - Configuration
 * @param {Object} primeBasis - Prime basis
 * @param {number} dt - Time step
 * @returns {number} Message attractor force contribution
 */
function calculateMessageAttractorForce(pulsar, messageBits, basisIndex, referenceBasis, pulsarIndex, 
                                      config, primeBasis, dt) {
  const messageBitForBasis = (messageBits && basisIndex < messageBits.length) ? messageBits[basisIndex] : null;
  
  if (messageBitForBasis !== null && referenceBasis && referenceBasis.pulsars[pulsarIndex]) {
    const referencePulsar = referenceBasis.pulsars[pulsarIndex];
    let targetPulsarPhaseForBit;
    
    if (messageBitForBasis === '1') {
      targetPulsarPhaseForBit = (referencePulsar.phase + (config.epsilonForEncoding || Math.PI / 64));
    } else { // '0'
      targetPulsarPhaseForBit = referencePulsar.phase;
    }
    
    targetPulsarPhaseForBit = normalizePhase(targetPulsarPhaseForBit);
    const phaseDifferenceToTarget = shortestAngleDifference(targetPulsarPhaseForBit, pulsar.phase);
    
    return ((config.messageAttractorForceStrength || 5.0) / primeBasis.originalPrime) * 
           phaseDifferenceToTarget * dt;
  }
  
  return 0;
}

/**
 * Calculate intra-basis coherence force
 * @param {Object} pulsar - Pulsar object
 * @param {Object} primeBasis - Prime basis
 * @param {number} compositeTendency - Composite phase tendency
 * @param {Object} config - Configuration
 * @param {number} dt - Time step
 * @returns {number} Intra-basis coherence force contribution
 */
function calculateIntraBasisCoherence(pulsar, primeBasis, compositeTendency, config, dt) {
  // Incorporate the composite phase tendency into the intra-basis coherence target
  const targetCoherencePhase = (primeBasis.compositePhase + compositeTendency);
  const phaseDiffToInfluencedComposite = shortestAngleDifference(targetCoherencePhase, pulsar.phase);
  
  return dt * (config.intraBasisCoherenceStrength || 0.05) * phaseDiffToInfluencedComposite;
}

/**
 * Apply phase updates and recalculate composite phases
 * @param {Object} primeState - PrimeState object
 * @param {Map} pulsarDeltaPhases - Phase deltas for each pulsar
 */
function applyPhaseUpdates(primeState, pulsarDeltaPhases) {
  primeState.primeBases.forEach(basis => {
    basis.pulsars.forEach(pulsar => {
      const delta = pulsarDeltaPhases.get(pulsar) || 0;
      pulsar.phase = normalizePhase(pulsar.phase + delta);
    });

    // Recalculate composite phase using circular mean
    basis.compositePhase = calculateCircularMean(basis.pulsars);
  });
}