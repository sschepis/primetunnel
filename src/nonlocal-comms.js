import { QuantumCommunicationAgent } from './core.js';
import { CONFIG } from './config.js';

let agentInstance = null;

/**
 * Initializes the Nonlocal Communication Agent.
 * This must be called before sending or receiving messages.
 * @param {object} [customConfig={}] - Optional custom configuration to override default settings.
 */
export function initializeAgent(customConfig = {}) {
  const currentConfig = { ...CONFIG, ...customConfig };
  agentInstance = new QuantumCommunicationAgent(currentConfig.primes, currentConfig);
  console.log("Nonlocal Communication Agent initialized with config:", currentConfig);
}

/**
 * Sends a message using the initialized agent.
 * @param {string} message - The binary message string (e.g., '1010').
 * @returns {boolean} True if message sending was attempted, false otherwise.
 */
export function sendMessage(message) {
  if (!agentInstance) {
    console.error("Agent not initialized. Call initializeAgent() first.");
    return false;
  }
  agentInstance.sendQuantumMessage(
    message,
    CONFIG.epsilon,
    CONFIG.useAmplitudeModulation ? CONFIG.amplitudeEpsilon : 0
  );
  console.log(`Message "${message}" sent.`);
  return true;
}

/**
 * Evolves the quantum state of the agent over a given timestep.
 * @param {number} timestep - The time step for evolution.
 * @param {string} [messageBits=''] - Optional message bits for reinforcement during evolution (e.g., for sender).
 * @returns {boolean} True if evolution was attempted, false otherwise.
 */
export function evolveAgent(timestep, messageBits = '') {
  if (!agentInstance) {
    console.error("Agent not initialized. Call initializeAgent() first.");
    return false;
  }
  agentInstance.evolve(timestep, CONFIG, messageBits);
  console.log(`Agent evolved for timestep ${timestep}.`);
  return true;
}

/**
 * Measures the current state of the agent.
 * @returns {object|null} An object containing resonanceStrength and entropy, or null if agent not initialized.
 */
export function measureAgent() {
  if (!agentInstance) {
    console.error("Agent not initialized. Call initializeAgent() first.");
    return null;
  }
  const metrics = agentInstance.measure();
  console.log("Agent metrics:", metrics);
  return metrics;
}

/**
 * Decodes a message from the current state of the agent.
 * @returns {string|null} The decoded binary message string, or null if agent not initialized.
 */
export function decodeMessage() {
  if (!agentInstance) {
    console.error("Agent not initialized. Call initializeAgent() first.");
    return null;
  }
  const decoded = agentInstance.decodeQuantumMessage(
    CONFIG.threshold,
    CONFIG.useAmplitudeModulation
  );
  console.log(`Message decoded: "${decoded}"`);
  return decoded;
}

/**
 * Gets the current configuration of the Nonlocal Communication system.
 * @returns {object} The current configuration object.
 */
export function getConfig() {
  return { ...CONFIG };
}

/**
 * Updates the configuration of the Nonlocal Communication system.
 * Note: Changes to primes will only take effect after re-initializing the agent.
 * @param {object} newConfig - An object containing configuration parameters to update.
 */
export function updateConfig(newConfig) {
  Object.assign(CONFIG, newConfig);
  console.log("Configuration updated:", newConfig);
}

/**
 * Resets the agent instance. Useful for starting a new communication session.
 */
export function resetAgent() {
  agentInstance = null;
  console.log("Agent instance reset.");
}

export async function runStrictNonLocalTest(configOverride = {}) {
  const testConfig = {
    ...CONFIG,
    ...configOverride,
    // Add nonlocal coupling parameters if not provided
    nonlocalCouplingStrength: configOverride.nonlocalCouplingStrength || 0.8,
    enableQuantumCorrelation: configOverride.enableQuantumCorrelation !== false,
    quantumCorrelationStrength: configOverride.quantumCorrelationStrength || 0.3
  };

  console.log(`\n=== STRICT NONLOCAL TEST ===`);
  console.log(`Message: "${testConfig.message}"`);
  console.log(`Strict mode: No shared state. Receiver must converge via resonance only.`);
  console.log(`Nonlocal coupling: ${testConfig.nonlocalCouplingStrength}, Quantum correlation: ${testConfig.enableQuantumCorrelation}`);

  const sender = new QuantumCommunicationAgent(testConfig.primes, testConfig);
  const receiver = new QuantumCommunicationAgent(testConfig.primes, testConfig);

  // Import the new quantum entanglement functions
  const { createQuantumEntanglement, evolveEntangledStates } = await import('./quantum/nonlocal-evolution.js');

  // Create quantum entanglement between sender and receiver
  createQuantumEntanglement(sender, receiver, 0.95);
  console.log(`\nQuantum entanglement established between sender and receiver.`);

  sender.sendQuantumMessage(
    testConfig.message,
    testConfig.epsilon,
    testConfig.useAmplitudeModulation ? testConfig.amplitudeEpsilon : 0
  );

  // Store reference states for evolution
  const senderReference = sender.referenceState;
  const receiverReference = receiver.referenceState;

  for (let i = 0; i < testConfig.cycles; i++) {
    // Use nonlocal evolution instead of independent evolution
    evolveEntangledStates(
      sender.state,
      receiver.state,
      testConfig.delta,
      testConfig,
      testConfig.message,
      senderReference?.primeBases,
      receiverReference?.primeBases
    );

    if (testConfig.enablePhaseCorrection && i % testConfig.correctionInterval === 0) {
      sender.applyPhaseCorrection(testConfig.correctionStrength);
      receiver.applyPhaseCorrection(testConfig.correctionStrength);
    }

    // Log progress every few cycles
    if (i % Math.floor(testConfig.cycles / 4) === 0 && i > 0) {
      const tempReceiverDecoded = receiver.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
      console.log(`  Cycle ${i}/${testConfig.cycles}: Receiver sees "${tempReceiverDecoded}"`);
    }
  }

  const senderDecoded = sender.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
  const receiverDecoded = receiver.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);

  const senderSuccess = senderDecoded === testConfig.message;
  const receiverSuccess = receiverDecoded === testConfig.message;

  console.log(`\nSender decoded:   "${senderDecoded}" ${senderSuccess ? '✓' : '✗'}`);
  console.log(`Receiver decoded: "${receiverDecoded}" ${receiverSuccess ? '✓' : '✗'}`);

  const senderMetrics = sender.measure();
  const receiverMetrics = receiver.measure();

  console.log(`\nQuantum metrics:`);
  console.log(`Sender:   Resonance=${senderMetrics.resonanceStrength.toFixed(4)}, Entropy=${senderMetrics.entropy.toFixed(4)}`);
  console.log(`Receiver: Resonance=${receiverMetrics.resonanceStrength.toFixed(4)}, Entropy=${receiverMetrics.entropy.toFixed(4)}`);

  if (receiverSuccess) {
    console.log(`✅ SUCCESS: Receiver converged to sender's message nonlocally.`);
  } else {
    console.log(`❌ FAILURE: Receiver did not converge. Check entropy drift, resonance strength, or phase misalignment.`);
  }

  return { senderSuccess, receiverSuccess };
}