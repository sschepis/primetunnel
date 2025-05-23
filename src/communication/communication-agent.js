/**
 * Base communication agent for quantum prime-based communication
 */

import { PrimeState } from '../quantum/prime-state.js';
import { evolveQuantumState } from '../quantum/quantum-evolution.js';
import { Metrics } from '../math/quantum-metrics.js';
import { calculateInitialPulsarPhase } from '../utils/phase-utils.js';
import { pulsarsByPrimes } from '../pulsar-frequencies.js';

/**
 * Base communication agent for quantum communication
 */
export class CommunicationAgent {
  /**
   * Create a new CommunicationAgent
   * @param {Array} sharedPrimeNumbersArray - Array of prime numbers to use as bases
   * @param {Object} agentConfig - Configuration object containing system parameters
   */
  constructor(sharedPrimeNumbersArray, agentConfig) {
    this.initializeStates(sharedPrimeNumbersArray, agentConfig);
  }

  /**
   * Initialize quantum states for the agent
   * @param {Array} sharedPrimeNumbersArray - Array of prime numbers
   * @param {Object} agentConfig - Agent configuration
   */
  initializeStates(sharedPrimeNumbersArray, agentConfig) {
    const primeBasesToUse = sharedPrimeNumbersArray;
    // Ensure agentConfig and agentConfig.maxPulsarsPerPrime are defined
    const maxPulsars = agentConfig && agentConfig.maxPulsarsPerPrime !== undefined
                       ? agentConfig.maxPulsarsPerPrime
                       : 3; // Default to 3 if not specified
    
    // Ensure pulsarsByPrimes is available
    const groupedPulsars = pulsarsByPrimes(primeBasesToUse, maxPulsars);
    
    this.state = new PrimeState(primeBasesToUse, groupedPulsars, calculateInitialPulsarPhase, agentConfig);
    this.referenceState = this.state.clone();
  }

  /**
   * Send a message by encoding it into the quantum state
   * @param {string} bitstring - Binary message to encode
   * @param {number} epsilon - Phase modulation parameter
   */
  sendMessage(bitstring, epsilon) {
    if (!this.state || !this.referenceState || !this.referenceState.primeBases) {
      console.error("State or referenceState not properly initialized in CommunicationAgent for sendMessage.");
      return;
    }
    
    for (let i = 0; i < bitstring.length && i < this.state.primeBases.length; i++) {
      const bit = bitstring[i];
      const referenceBasisState = this.referenceState.primeBases[i];
      if (referenceBasisState) {
        this.state.modulatePrimeBasisPhase(i, bit, epsilon, referenceBasisState);
      } else {
        console.warn(`Reference basis state not found for index ${i} during sendMessage.`);
      }
    }
  }

  /**
   * Evolve the quantum state over time
   * @param {number} timestep - Time step for evolution
   * @param {Object} agentConfig - Configuration parameters
   * @param {string} messageBits - Message bits for evolution (empty for receiver)
   */
  evolve(timestep, agentConfig, messageBits) {
    if (!this.state || !this.referenceState || !this.referenceState.primeBases) {
      console.error("State or referenceState not properly initialized for evolve.");
      return;
    }
    
    const evolutionConfig = this.buildEvolutionConfig(agentConfig);
    evolveQuantumState(this.state, timestep, evolutionConfig, messageBits, this.referenceState.primeBases);
  }

  /**
   * Build evolution configuration from agent config
   * @param {Object} agentConfig - Agent configuration
   * @returns {Object} Evolution configuration
   */
  buildEvolutionConfig(agentConfig) {
    return {
      interBasisResonanceStrength: agentConfig.resonanceStrength,
      messageAttractorForceStrength: agentConfig.messageForce,
      epsilonForEncoding: agentConfig.epsilon,
      amplitudeCouplingStrength: agentConfig.amplitudeCouplingStrength !== undefined
                                 ? agentConfig.amplitudeCouplingStrength : 0.5, // Default
      intraBasisCoherenceStrength: agentConfig.intraBasisCoherenceStrength !== undefined
                                   ? agentConfig.intraBasisCoherenceStrength : 0.05, // Default
    };
  }

  /**
   * Measure quantum properties of the current state
   * @returns {Object} Object containing resonance strength and entropy measurements
   */
  measure() {
    const rStrength = Metrics.resonanceStrength(this.state, this.referenceState);
    const entropy = Metrics.entropy(this.state);
    return { resonanceStrength: rStrength, entropy };
  }

  /**
   * Decode message from the quantum state
   * @param {number} threshold - Threshold for bit detection
   * @returns {string} Decoded binary message
   */
  decodeMessage(threshold) {
    if (!this.state || !this.state.primeBases || !this.referenceState || !this.referenceState.primeBases) {
      console.error("State or primeBases not initialized for decodeMessage.");
      return "";
    }

    const finalDecodedBits = [];
    
    for (let i = 0; i < this.state.primeBases.length; i++) {
      const decodedBit = this.decodeBasisBit(i, threshold);
      finalDecodedBits.push(decodedBit);
    }
    
    return finalDecodedBits.join('');
  }

  /**
   * Decode a single bit from a specific prime basis
   * @param {number} basisIndex - Index of the prime basis
   * @param {number} threshold - Detection threshold
   * @returns {string} Decoded bit ('0' or '1')
   */
  decodeBasisBit(basisIndex, threshold) {
    const primeBasis_i = this.state.primeBases[basisIndex];
    const referenceBasis_i = this.referenceState.primeBases[basisIndex];

    if (!primeBasis_i || !primeBasis_i.pulsars || !referenceBasis_i || 
        !referenceBasis_i.pulsars || primeBasis_i.pulsars.length === 0) {
      console.warn(`Skipping decode for prime basis ${basisIndex}: missing data or no pulsars.`);
      return '0'; // Default to '0' if basis is problematic
    }

    let voteForOne = 0;
    let voteForZero = 0;

    for (let k = 0; k < primeBasis_i.pulsars.length; k++) {
      const pulsar_k = primeBasis_i.pulsars[k];
      const referencePulsar_k = referenceBasis_i.pulsars[k];

      if (!pulsar_k || !referencePulsar_k) {
        console.warn(`Skipping pulsar k=${k} in basis i=${basisIndex} during decode: missing pulsar data.`);
        continue;
      }

      const vote = this.decodePulsarVote(pulsar_k, referencePulsar_k, threshold);
      if (vote === '1') {
        voteForOne++;
      } else {
        voteForZero++;
      }
    }

    if (voteForOne > voteForZero) {
      return '1';
    } else if (voteForZero > voteForOne) {
      return '0';
    } else {
      return '0'; // Tie-breaking rule: default to '0'
    }
  }

  /**
   * Get vote from a single pulsar for bit decoding
   * @param {Object} pulsar - Current pulsar state
   * @param {Object} referencePulsar - Reference pulsar state
   * @param {number} threshold - Detection threshold
   * @returns {string} Vote ('0' or '1')
   */
  decodePulsarVote(pulsar, referencePulsar, threshold) {
    let normalizedDelta = (pulsar.phase - referencePulsar.phase);
    while (normalizedDelta <= -Math.PI) normalizedDelta += 2 * Math.PI;
    while (normalizedDelta > Math.PI) normalizedDelta -= 2 * Math.PI;
    // normalizedDelta is now in (-PI, PI].
    // If original encoding was +epsilon, we expect a positive delta for '1'.

    if (normalizedDelta > threshold) { // If phase advanced significantly beyond reference
      return '1';
    } else { // Includes small positive deviations, zero, or negative deviations
      return '0';
    }
  }
}