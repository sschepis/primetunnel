/**
 * Advanced quantum communication agent with amplitude modulation and phase correction
 */

import { CommunicationAgent } from './communication-agent.js';
import { log } from '../utils/logger.js';
import { shortestAngleDifference, normalizePhase } from '../utils/phase-utils.js';

/**
 * Advanced quantum communication agent with additional features
 */
export class QuantumCommunicationAgent extends CommunicationAgent {
  /**
   * Send message with both phase and amplitude encoding
   * @param {string} message - Binary message to send
   * @param {number} phaseEpsilon - Phase modulation parameter
   * @param {number} amplitudeEpsilon - Amplitude modulation parameter (0 to disable)
   */
  sendQuantumMessage(message, phaseEpsilon, amplitudeEpsilon = 0) {
    // Phase-based encoding (handled by CommunicationAgent.sendMessage via PrimeState.modulatePrimeBasisPhase)
    super.sendMessage(message, phaseEpsilon); // Call super for phase part
    
    // If amplitude modulation is enabled, also encode in amplitude
    if (amplitudeEpsilon > 0 && this.state && typeof this.state.normalizeAllPulsarAmplitudes === 'function') {
      this.modulatePrimeBasisAmplitude(message, amplitudeEpsilon);
    }
  }

  /**
   * Modulate pulsar amplitudes based on message bits
   * @param {string} message - Binary message
   * @param {number} amplitudeEpsilon - Amplitude modulation parameter
   */
  modulatePrimeBasisAmplitude(message, amplitudeEpsilon) {
    if (!this.state || !this.state.primeBases) {
      log("State or primeBases not initialized for modulatePrimeBasisAmplitude.", 'error');
      return;
    }

    for (let i = 0; i < message.length && i < this.state.primeBases.length; i++) {
      const bit = message[i];
      const primeBasis = this.state.primeBases[i];
      
      if (!primeBasis || !primeBasis.pulsars || primeBasis.pulsars.length === 0) {
        log(`Skipping amplitude modulation for prime basis ${i}: no pulsars.`, 'debug');
        continue;
      }

      this.modulateBasisAmplitude(primeBasis, bit, amplitudeEpsilon);
    }

    // Global normalization of all individual pulsar amplitudes
    this.state.normalizeAllPulsarAmplitudes();

    // Recalculate composite amplitudes for each basis
    this.updateAllCompositeAmplitudes();
  }

  /**
   * Modulate amplitude for a single prime basis
   * @param {Object} primeBasis - Prime basis to modulate
   * @param {string} bit - Bit value ('0' or '1')
   * @param {number} amplitudeEpsilon - Amplitude modulation parameter
   */
  modulateBasisAmplitude(primeBasis, bit, amplitudeEpsilon) {
    const perPulsarAmpChange = amplitudeEpsilon / primeBasis.pulsars.length;

    for (const pulsar of primeBasis.pulsars) {
      if (bit === '1') {
        pulsar.amplitude += perPulsarAmpChange;
      } else { // bit === '0'
        pulsar.amplitude -= perPulsarAmpChange;
      }
      pulsar.amplitude = Math.max(0, pulsar.amplitude); // Ensure amplitude doesn't go negative
    }
  }

  /**
   * Update composite amplitudes for all prime bases
   */
  updateAllCompositeAmplitudes() {
    for (const primeBasis of this.state.primeBases) {
      if (primeBasis.pulsars && primeBasis.pulsars.length > 0) {
        let sumSqAmp = 0;
        primeBasis.pulsars.forEach(p => sumSqAmp += p.amplitude * p.amplitude);
        primeBasis.compositeAmplitude = Math.sqrt(sumSqAmp);
      } else {
        primeBasis.compositeAmplitude = 0;
      }
    }
  }
  
  /**
   * Apply phase correction based on reference state and original message
   * @param {number} strength - Correction strength [0, 1]
   */
  applyPhaseCorrection(strength) {
    if (!this.state || !this.state.primeBases || !this.referenceState || !this.referenceState.primeBases) {
      log("State or primeBases not initialized for applyPhaseCorrection.", 'error');
      return;
    }

    for (let i = 0; i < this.state.primeBases.length; i++) {
      this.correctBasisPhase(i, strength);
    }
  }

  /**
   * Correct phase for a single prime basis
   * @param {number} basisIndex - Index of the basis to correct
   * @param {number} strength - Correction strength
   */
  correctBasisPhase(basisIndex, strength) {
    const primeBasis = this.state.primeBases[basisIndex];
    const referenceBasis = this.referenceState.primeBases[basisIndex];

    if (!primeBasis || !primeBasis.pulsars || !referenceBasis || !referenceBasis.pulsars) {
      log(`Skipping phase correction for basis ${basisIndex}: missing data.`, 'debug');
      return;
    }
    
    let sumWeightedPhasesX = 0;
    let sumWeightedPhasesY = 0;
    let sumWeights = 0;

    for (let k = 0; k < primeBasis.pulsars.length; k++) {
      const correction = this.calculatePulsarPhaseCorrection(
        primeBasis.pulsars[k], 
        referenceBasis.pulsars[k], 
        basisIndex, 
        strength
      );
      
      if (correction !== null) {
        // For circular mean (amplitude-weighted)
        const weight = primeBasis.pulsars[k].amplitude;
        sumWeightedPhasesX += weight * Math.cos(primeBasis.pulsars[k].phase);
        sumWeightedPhasesY += weight * Math.sin(primeBasis.pulsars[k].phase);
        sumWeights += weight;
      }
    }
    
    // Recalculate composite phase for the basis
    this.updateBasisCompositePhase(primeBasis, sumWeightedPhasesX, sumWeightedPhasesY, sumWeights);
  }

  /**
   * Calculate phase correction for a single pulsar
   * @param {Object} pulsar - Current pulsar
   * @param {Object} refPulsar - Reference pulsar
   * @param {number} basisIndex - Basis index for message lookup
   * @param {number} strength - Correction strength
   * @returns {number|null} Applied correction or null if skipped
   */
  calculatePulsarPhaseCorrection(pulsar, refPulsar, basisIndex, strength) {
    if (!pulsar || !refPulsar) {
      log(`Skipping phase correction for pulsar in basis ${basisIndex}: missing pulsar data.`, 'debug');
      return null;
    }

    const currentPhase = pulsar.phase;
    // This would need access to the original message - for now using a default approach
    const originalMessageBit = '0'; // Default assumption

    let targetPulsarPhase;
    if (originalMessageBit === '1') {
      // This would need the original epsilon value - using a default
      targetPulsarPhase = (refPulsar.phase + (Math.PI / 64));
    } else { // '0'
      targetPulsarPhase = refPulsar.phase;
    }
    targetPulsarPhase = normalizePhase(targetPulsarPhase);

    const correction = shortestAngleDifference(targetPulsarPhase, currentPhase);
    pulsar.phase = normalizePhase(currentPhase + correction * strength);
    
    return correction;
  }

  /**
   * Update composite phase for a basis using weighted circular mean
   * @param {Object} primeBasis - Prime basis to update
   * @param {number} sumWeightedPhasesX - Sum of weighted X components
   * @param {number} sumWeightedPhasesY - Sum of weighted Y components
   * @param {number} sumWeights - Sum of weights
   */
  updateBasisCompositePhase(primeBasis, sumWeightedPhasesX, sumWeightedPhasesY, sumWeights) {
    if (primeBasis.pulsars.length > 0 && sumWeights > 1e-9) {
      primeBasis.compositePhase = Math.atan2(sumWeightedPhasesY / sumWeights, sumWeightedPhasesX / sumWeights);
      primeBasis.compositePhase = normalizePhase(primeBasis.compositePhase);
    } else if (primeBasis.pulsars.length > 0) {
      // Fallback if all weights are zero (simple average)
      let sumPhases = 0;
      primeBasis.pulsars.forEach(p => sumPhases += p.phase);
      primeBasis.compositePhase = normalizePhase(sumPhases / primeBasis.pulsars.length);
    } else {
      primeBasis.compositePhase = 0;
    }
  }
  
  /**
   * Decode message with optional amplitude decoding
   * @param {number} phaseThreshold - Threshold for phase-based decoding
   * @param {boolean} useAmplitude - Whether to use amplitude information
   * @returns {string} Decoded message
   */
  decodeQuantumMessage(phaseThreshold, useAmplitude = false) {
    // Phase-based decoding with ECC (from CommunicationAgent)
    let phaseDecodedBitsArray = super.decodeMessage(phaseThreshold).split('');

    if (useAmplitude && this.state && this.state.primeBases) {
      const amplitudeDecodedBitsArray = this.decodeAmplitude().split('');
      
      // Combine: if amplitude decoding suggests '1', override phase decoding if it was '0'.
      // This is a simple OR-like combination favoring '1' from amplitude.
      for (let i = 0; i < phaseDecodedBitsArray.length; i++) {
        if (i < amplitudeDecodedBitsArray.length && amplitudeDecodedBitsArray[i] === '1') {
          phaseDecodedBitsArray[i] = '1';
        }
      }
    }
    
    return phaseDecodedBitsArray.join('');
  }
  
  /**
   * Decode message based on amplitude differences
   * @returns {string} Amplitude-decoded message
   */
  decodeAmplitude() {
    if (!this.state || !this.state.primeBases || !this.referenceState || !this.referenceState.primeBases) {
      log("State or primeBases not initialized for decodeAmplitude.", 'error');
      return "";
    }

    const amplitudeDecodedBits = [];
    const amplitudeThreshold = 0.05; // Default threshold for composite amplitude change

    for (let i = 0; i < this.state.primeBases.length; i++) {
      const bit = this.decodeAmplitudeBit(i, amplitudeThreshold);
      amplitudeDecodedBits.push(bit);
    }
    
    return amplitudeDecodedBits.join('');
  }

  /**
   * Decode a single bit based on amplitude
   * @param {number} basisIndex - Index of the prime basis
   * @param {number} amplitudeThreshold - Detection threshold
   * @returns {string} Decoded bit ('0' or '1')
   */
  decodeAmplitudeBit(basisIndex, amplitudeThreshold) {
    const primeBasis = this.state.primeBases[basisIndex];
    const referenceBasis = this.referenceState.primeBases[basisIndex];

    if (!primeBasis || !primeBasis.pulsars || !referenceBasis || !referenceBasis.pulsars) {
      return '0'; // Default if data is missing
    }

    const currentCompositeAmp = this.calculateCompositeAmplitude(primeBasis.pulsars);
    const refCompositeAmp = this.calculateCompositeAmplitude(referenceBasis.pulsars);
    
    if (currentCompositeAmp - refCompositeAmp > amplitudeThreshold) {
      return '1';
    } else {
      return '0';
    }
  }

  /**
   * Calculate composite amplitude from pulsars
   * @param {Array} pulsars - Array of pulsar objects
   * @returns {number} Composite amplitude
   */
  calculateCompositeAmplitude(pulsars) {
    let sumSqAmp = 0;
    pulsars.forEach(p => sumSqAmp += p.amplitude * p.amplitude);
    return Math.sqrt(sumSqAmp);
  }
}