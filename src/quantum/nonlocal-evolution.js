/**
 * Nonlocal quantum evolution with entanglement coupling
 */

import { evolveQuantumState } from './quantum-evolution.js';
import { Metrics } from '../math/quantum-metrics.js';
import { shortestAngleDifference, normalizePhase } from '../utils/phase-utils.js';

/**
 * Evolve two entangled quantum states with nonlocal coupling
 * @param {Object} senderState - Sender's PrimeState
 * @param {Object} receiverState - Receiver's PrimeState  
 * @param {number} dt - Time step
 * @param {Object} config - Evolution configuration
 * @param {string} senderMessage - Message bits for sender
 * @param {Array} senderReference - Sender's reference state
 * @param {Array} receiverReference - Receiver's reference state
 */
export function evolveEntangledStates(
  senderState, 
  receiverState, 
  dt, 
  config, 
  senderMessage,
  senderReference,
  receiverReference
) {
  // First evolve sender normally with message reinforcement
  evolveQuantumState(senderState, dt, config, senderMessage, senderReference);
  
  // Calculate nonlocal coupling strength based on current resonance
  const resonance = Metrics.resonanceStrength(receiverState, senderState);
  const nonlocalCoupling = (config.nonlocalCouplingStrength || 0.5) * resonance;
  
  // Apply nonlocal phase coupling to receiver before normal evolution
  applyNonlocalPhaseCoupling(receiverState, senderState, nonlocalCoupling, dt);
  
  // Then evolve receiver with empty message but influenced by nonlocal coupling
  evolveQuantumState(receiverState, dt, config, '', receiverReference);
  
  // Apply quantum correlation correction
  if (config.enableQuantumCorrelation) {
    applyQuantumCorrelation(receiverState, senderState, config.quantumCorrelationStrength || 0.3, dt);
  }
}

/**
 * Apply nonlocal phase coupling from sender to receiver
 * @param {Object} receiverState - Receiver's quantum state
 * @param {Object} senderState - Sender's quantum state
 * @param {number} couplingStrength - Strength of nonlocal coupling
 * @param {number} dt - Time step
 */
function applyNonlocalPhaseCoupling(receiverState, senderState, couplingStrength, dt) {
  if (!receiverState.primeBases || !senderState.primeBases) return;
  
  const numBases = Math.min(receiverState.primeBases.length, senderState.primeBases.length);
  
  for (let i = 0; i < numBases; i++) {
    const receiverBasis = receiverState.primeBases[i];
    const senderBasis = senderState.primeBases[i];
    
    if (!receiverBasis.pulsars || !senderBasis.pulsars) continue;
    
    // Apply nonlocal influence to each pulsar
    const numPulsars = Math.min(receiverBasis.pulsars.length, senderBasis.pulsars.length);
    
    for (let k = 0; k < numPulsars; k++) {
      const receiverPulsar = receiverBasis.pulsars[k];
      const senderPulsar = senderBasis.pulsars[k];
      
      // Calculate phase difference
      const phaseDiff = shortestAngleDifference(senderPulsar.phase, receiverPulsar.phase);
      
      // Apply nonlocal phase influence
      const phaseInfluence = couplingStrength * phaseDiff * dt;
      receiverPulsar.phase = normalizePhase(receiverPulsar.phase + phaseInfluence);
      
      // Also couple amplitudes slightly
      const ampDiff = senderPulsar.amplitude - receiverPulsar.amplitude;
      receiverPulsar.amplitude += couplingStrength * ampDiff * dt * 0.1;
      receiverPulsar.amplitude = Math.max(0, receiverPulsar.amplitude);
    }
    
    // Update composite phase
    updateBasisCompositePhase(receiverBasis);
  }
}

/**
 * Apply quantum correlation effects between entangled states
 * @param {Object} receiverState - Receiver's quantum state
 * @param {Object} senderState - Sender's quantum state
 * @param {number} correlationStrength - Strength of quantum correlation
 * @param {number} dt - Time step
 */
function applyQuantumCorrelation(receiverState, senderState, correlationStrength, dt) {
  if (!receiverState.primeBases || !senderState.primeBases) return;
  
  const numBases = Math.min(receiverState.primeBases.length, senderState.primeBases.length);
  
  for (let i = 0; i < numBases; i++) {
    const receiverBasis = receiverState.primeBases[i];
    const senderBasis = senderState.primeBases[i];
    
    // Apply quantum correlation at the composite level
    const compositePhaseDiff = shortestAngleDifference(
      senderBasis.compositePhase, 
      receiverBasis.compositePhase
    );
    
    // Quantum correlation creates a "pull" toward sender's composite phase
    const correlationForce = correlationStrength * Math.sin(compositePhaseDiff) * dt;
    
    // Apply to all pulsars in the basis
    for (const pulsar of receiverBasis.pulsars) {
      pulsar.phase = normalizePhase(pulsar.phase + correlationForce);
    }
    
    // Update composite phase
    updateBasisCompositePhase(receiverBasis);
  }
}

/**
 * Update composite phase for a basis using circular mean
 * @param {Object} basis - Prime basis to update
 */
function updateBasisCompositePhase(basis) {
  if (!basis.pulsars || basis.pulsars.length === 0) {
    basis.compositePhase = 0;
    return;
  }
  
  let sumX = 0;
  let sumY = 0;
  let sumWeights = 0;
  
  for (const pulsar of basis.pulsars) {
    const weight = pulsar.amplitude;
    sumX += weight * Math.cos(pulsar.phase);
    sumY += weight * Math.sin(pulsar.phase);
    sumWeights += weight;
  }
  
  if (sumWeights > 1e-9) {
    basis.compositePhase = Math.atan2(sumY / sumWeights, sumX / sumWeights);
    basis.compositePhase = normalizePhase(basis.compositePhase);
  } else {
    // Fallback to simple average if weights are too small
    let sumPhases = 0;
    for (const pulsar of basis.pulsars) {
      sumPhases += pulsar.phase;
    }
    basis.compositePhase = normalizePhase(sumPhases / basis.pulsars.length);
  }
}

/**
 * Create a quantum entanglement between two agents
 * This establishes the initial correlation needed for nonlocal communication
 * @param {Object} agent1 - First quantum communication agent
 * @param {Object} agent2 - Second quantum communication agent
 * @param {number} entanglementStrength - Strength of initial entanglement (0-1)
 */
export function createQuantumEntanglement(agent1, agent2, entanglementStrength = 0.9) {
  if (!agent1.state || !agent2.state) {
    throw new Error("Both agents must be initialized before entanglement");
  }
  
  const state1 = agent1.state;
  const state2 = agent2.state;
  
  const numBases = Math.min(state1.primeBases.length, state2.primeBases.length);
  
  for (let i = 0; i < numBases; i++) {
    const basis1 = state1.primeBases[i];
    const basis2 = state2.primeBases[i];
    
    const numPulsars = Math.min(basis1.pulsars.length, basis2.pulsars.length);
    
    for (let k = 0; k < numPulsars; k++) {
      const pulsar1 = basis1.pulsars[k];
      const pulsar2 = basis2.pulsars[k];
      
      // Create phase entanglement by bringing phases closer
      const avgPhase = (pulsar1.phase + pulsar2.phase) / 2;
      pulsar1.phase = normalizePhase(
        pulsar1.phase * (1 - entanglementStrength) + avgPhase * entanglementStrength
      );
      pulsar2.phase = normalizePhase(
        pulsar2.phase * (1 - entanglementStrength) + avgPhase * entanglementStrength
      );
      
      // Also entangle amplitudes
      const avgAmplitude = (pulsar1.amplitude + pulsar2.amplitude) / 2;
      pulsar1.amplitude = pulsar1.amplitude * (1 - entanglementStrength * 0.5) + 
                         avgAmplitude * entanglementStrength * 0.5;
      pulsar2.amplitude = pulsar2.amplitude * (1 - entanglementStrength * 0.5) + 
                         avgAmplitude * entanglementStrength * 0.5;
    }
    
    // Update composite phases
    updateBasisCompositePhase(basis1);
    updateBasisCompositePhase(basis2);
  }
}