/**
 * Message-focused nonlocal resonance for quantum communication
 */

import { normalizePhase, shortestAngleDifference } from '../utils/phase-utils.js';
import { Metrics } from '../math/quantum-metrics.js';

/**
 * Apply message-resonance coupling between sender and receiver
 * This coupling helps the receiver converge to the encoded message pattern
 * rather than just synchronizing phases
 * 
 * @param {Object} sender - Sender agent
 * @param {Object} receiver - Receiver agent
 * @param {string} message - The target message
 * @param {number} dt - Time step
 * @param {Object} config - Configuration with resonance parameters
 */
export function applyMessageResonance(sender, receiver, message, dt, config) {
  if (!sender.state || !receiver.state || !sender.referenceState || !receiver.referenceState) {
    console.error("Missing state or reference state for message resonance");
    return;
  }

  const senderState = sender.state;
  const receiverState = receiver.state;
  const senderRef = sender.referenceState;
  const receiverRef = receiver.referenceState;
  
  // Calculate current resonance between sender and receiver
  const resonance = Metrics.resonanceStrength(receiverState, senderState);
  
  // Message resonance strength scales with quantum resonance
  const messageResonanceStrength = (config.messageResonanceStrength || 0.5) * resonance;
  
  const numBases = Math.min(
    senderState.primeBases.length, 
    receiverState.primeBases.length,
    message.length
  );
  
  for (let i = 0; i < numBases; i++) {
    const bit = message[i];
    const senderBasis = senderState.primeBases[i];
    const receiverBasis = receiverState.primeBases[i];
    const senderRefBasis = senderRef.primeBases[i];
    const receiverRefBasis = receiverRef.primeBases[i];
    
    if (!senderBasis || !receiverBasis || !senderRefBasis || !receiverRefBasis) continue;
    
    // Calculate the target phase difference for this bit
    const targetPhaseDiff = bit === '1' ? (config.epsilon || 0.3) : 0;
    
    // For each pulsar in the basis
    const numPulsars = Math.min(senderBasis.pulsars.length, receiverBasis.pulsars.length);
    
    for (let k = 0; k < numPulsars; k++) {
      const senderPulsar = senderBasis.pulsars[k];
      const receiverPulsar = receiverBasis.pulsars[k];
      const senderRefPulsar = senderRefBasis.pulsars[k];
      const receiverRefPulsar = receiverRefBasis.pulsars[k];
      
      if (!senderRefPulsar || !receiverRefPulsar) continue;
      
      // Calculate target phases based on the message
      let targetReceiverPhase;
      if (bit === '1') {
        // For bit '1', receiver should be ahead of its reference by epsilon
        targetReceiverPhase = normalizePhase(receiverRefPulsar.phase + targetPhaseDiff);
      } else {
        // For bit '0', receiver should match its reference
        targetReceiverPhase = receiverRefPulsar.phase;
      }
      
      // Apply resonance force toward target phase
      const phaseError = shortestAngleDifference(targetReceiverPhase, receiverPulsar.phase);
      const resonanceForce = messageResonanceStrength * phaseError * dt;
      
      // Apply the force
      receiverPulsar.phase = normalizePhase(receiverPulsar.phase + resonanceForce);
      
      // Also apply a stabilizing force to the sender to prevent drift
      if (config.enableSenderStabilization) {
        let targetSenderPhase;
        if (bit === '1') {
          targetSenderPhase = normalizePhase(senderRefPulsar.phase + targetPhaseDiff);
        } else {
          targetSenderPhase = senderRefPulsar.phase;
        }
        
        const senderPhaseError = shortestAngleDifference(targetSenderPhase, senderPulsar.phase);
        const senderStabilization = (config.senderStabilizationStrength || 0.1) * senderPhaseError * dt;
        senderPulsar.phase = normalizePhase(senderPulsar.phase + senderStabilization);
      }
    }
    
    // Update composite phases
    updateBasisCompositePhase(senderBasis);
    updateBasisCompositePhase(receiverBasis);
  }
}

/**
 * Apply quantum field resonance between sender and receiver
 * This creates a "field effect" where the encoded message pattern
 * influences the receiver through quantum resonance
 * 
 * @param {Object} sender - Sender agent
 * @param {Object} receiver - Receiver agent
 * @param {string} message - The target message
 * @param {number} dt - Time step
 * @param {Object} config - Configuration
 */
export function applyQuantumFieldResonance(sender, receiver, message, dt, config) {
  if (!sender.state || !receiver.state) return;
  
  const fieldStrength = config.quantumFieldStrength || 0.3;
  const senderState = sender.state;
  const receiverState = receiver.state;
  
  // Calculate the quantum field based on sender's message encoding
  const quantumField = calculateMessageQuantumField(senderState, sender.referenceState, message, config.epsilon || 0.3);
  
  // Apply the field influence to receiver
  for (let i = 0; i < Math.min(receiverState.primeBases.length, quantumField.length); i++) {
    const receiverBasis = receiverState.primeBases[i];
    const fieldComponent = quantumField[i];
    
    // The field creates a bias toward the message bit value
    const fieldForce = fieldStrength * fieldComponent.strength * dt;
    
    for (const pulsar of receiverBasis.pulsars) {
      // Apply field influence as a phase bias
      if (fieldComponent.bit === '1') {
        // For '1' bits, push phase forward
        pulsar.phase = normalizePhase(pulsar.phase + fieldForce);
      } else {
        // For '0' bits, pull phase backward
        pulsar.phase = normalizePhase(pulsar.phase - fieldForce * 0.5);
      }
    }
    
    updateBasisCompositePhase(receiverBasis);
  }
}

/**
 * Calculate the quantum field generated by a message-encoded state
 * @param {Object} state - Current quantum state
 * @param {Object} referenceState - Reference quantum state
 * @param {string} message - Encoded message
 * @param {number} epsilon - Encoding epsilon
 * @returns {Array} Quantum field components
 */
function calculateMessageQuantumField(state, referenceState, message, epsilon) {
  const field = [];
  
  for (let i = 0; i < Math.min(state.primeBases.length, message.length); i++) {
    const basis = state.primeBases[i];
    const refBasis = referenceState?.primeBases[i];
    const bit = message[i];
    
    if (!basis || !refBasis) {
      field.push({ bit: '0', strength: 0 });
      continue;
    }
    
    // Calculate how well this basis encodes its bit
    const expectedPhaseDiff = bit === '1' ? epsilon : 0;
    const actualPhaseDiff = Math.abs(basis.compositePhase - refBasis.compositePhase);
    
    // Strength is higher when the encoding matches expectation
    const encodingQuality = bit === '1' 
      ? Math.cos(actualPhaseDiff - expectedPhaseDiff)
      : Math.cos(actualPhaseDiff);
    
    field.push({
      bit: bit,
      strength: Math.max(0, encodingQuality)
    });
  }
  
  return field;
}

/**
 * Update composite phase for a basis
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
  }
}

/**
 * Enhanced evolution for nonlocal communication with message focus
 * @param {Object} sender - Sender agent
 * @param {Object} receiver - Receiver agent
 * @param {number} dt - Time step
 * @param {Object} config - Configuration
 * @param {string} message - Target message
 */
export function evolveWithMessageResonance(sender, receiver, dt, config, message) {
  // First apply standard evolution
  sender.evolve(dt, config, message);
  receiver.evolve(dt, config, '');
  
  // Then apply message resonance coupling
  applyMessageResonance(sender, receiver, message, dt, config);
  
  // Apply quantum field resonance if enabled
  if (config.enableQuantumField) {
    applyQuantumFieldResonance(sender, receiver, message, dt, config);
  }
  
  // Apply phase correction if enabled
  if (config.enablePhaseCorrection && Math.random() < 0.1) { // Stochastic correction
    sender.applyPhaseCorrection(config.correctionStrength * 0.5);
    receiver.applyPhaseCorrection(config.correctionStrength * 0.5);
  }
}