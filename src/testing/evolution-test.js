/**
 * Evolution mode test with quantum evolution for communication
 */

import { QuantumCommunicationAgent } from '../communication/quantum-communication-agent.js';
import { log } from '../utils/logger.js';

/**
 * Run the evolution test
 * @param {Object} config - Test configuration parameters
 * @param {number} iteration - Current iteration number (optional, for logging)
 * @returns {Promise<Object>} Test results with sender and receiver success flags
 */
export async function runEvolutionTest(config, iteration = 0) {
  const currentConfig = config;

  // Log iteration if verbose and iteration is provided
  if (currentConfig.verbose && iteration > 0) {
    log(`\n========== STARTING TEST ITERATION ${iteration}/${currentConfig.iterations} ==========`, 'system');
  }
  
  try {
    // Initialize the agents with the provided config
    if (currentConfig.verbose) log('Initializing quantum communication agents...', 'info');
    const sender = new QuantumCommunicationAgent(currentConfig.primes, currentConfig);
    const receiver = new QuantumCommunicationAgent(currentConfig.primes, currentConfig);
    
    // Record initial state for debugging
    logInitialStates(sender, receiver, currentConfig);
    
    // Quantum message sending
    if (currentConfig.verbose) log(`Sending message "${currentConfig.message}" with quantum encoding...`, 'info');
    sender.sendQuantumMessage(
      currentConfig.message,
      currentConfig.epsilon,
      currentConfig.useAmplitudeModulation ? currentConfig.amplitudeEpsilon : 0
    );
    
    logPostEncodingStates(sender, currentConfig);
    
    // Quantum evolution with phase correction
    await runQuantumEvolution(sender, receiver, currentConfig);
    
    logPostEvolutionStates(sender, receiver, currentConfig);
    
    // Decode messages
    const results = decodeMessages(sender, receiver, currentConfig);
    
    // Log final results and metrics
    logFinalResults(sender, receiver, results, currentConfig);
    
    return results;

  } catch (error) {
    log(`Evolution test error: ${error.message}`, 'error');
    return { senderSuccess: false, receiverSuccess: false };
  }
}

/**
 * Log initial quantum states
 * @param {QuantumCommunicationAgent} sender - Sender agent
 * @param {QuantumCommunicationAgent} receiver - Receiver agent
 * @param {Object} config - Configuration
 */
function logInitialStates(sender, receiver, config) {
  if (config.verbose) {
    log('Initial quantum states (composite):', 'debug');
    log(`Sender composite phases: ${sender.state.primeBases.map(b => b.compositePhase.toFixed(4))}`, 'debug');
    log(`Receiver composite phases: ${receiver.state.primeBases.map(b => b.compositePhase.toFixed(4))}`, 'debug');
    log(`Sender composite amplitudes: ${sender.state.primeBases.map(b => b.compositeAmplitude.toFixed(4))}`, 'debug');
    log(`Receiver composite amplitudes: ${receiver.state.primeBases.map(b => b.compositeAmplitude.toFixed(4))}`, 'debug');
  }
}

/**
 * Log post-encoding quantum states
 * @param {QuantumCommunicationAgent} sender - Sender agent
 * @param {Object} config - Configuration
 */
function logPostEncodingStates(sender, config) {
  if (config.verbose) {
    log('Post-encoding quantum states (composite):', 'debug');
    log(`Sender composite phases: ${sender.state.primeBases.map(b => b.compositePhase.toFixed(4))}`, 'debug');
    log(`Sender composite amplitudes: ${sender.state.primeBases.map(b => b.compositeAmplitude.toFixed(4))}`, 'debug');
  }
}

/**
 * Run quantum evolution with phase correction
 * @param {QuantumCommunicationAgent} sender - Sender agent
 * @param {QuantumCommunicationAgent} receiver - Receiver agent
 * @param {Object} config - Configuration
 */
async function runQuantumEvolution(sender, receiver, config) {
  if (config.verbose) log(`Running quantum evolution with improved parameters (${config.cycles} cycles)...`, 'info');
  
  for (let i = 0; i < config.cycles; i++) {
    // Evolve sender with message reinforcement
    sender.evolve(config.delta, config, config.message);
    
    // Evolve receiver without message (entangled evolution)
    receiver.evolve(config.delta, config, ''); // Pass empty message
    
    // Apply phase correction periodically if enabled
    if (config.enablePhaseCorrection && i % config.correctionInterval === 0) {
      if (config.verbose) log(`Applying phase correction at cycle ${i}...`, 'debug');
      sender.applyPhaseCorrection(config.correctionStrength);
      receiver.applyPhaseCorrection(config.correctionStrength);
    }
    
    // Small delay to simulate real evolution
    if (i % 10 === 0) {
      await new Promise(resolve => setTimeout(resolve, 1));
    }
  }
}

/**
 * Log post-evolution quantum states
 * @param {QuantumCommunicationAgent} sender - Sender agent
 * @param {QuantumCommunicationAgent} receiver - Receiver agent
 * @param {Object} config - Configuration
 */
function logPostEvolutionStates(sender, receiver, config) {
  if (config.verbose) {
    log('Post-evolution quantum states (composite):', 'debug');
    log(`Sender composite phases: ${sender.state.primeBases.map(b => b.compositePhase.toFixed(4))}`, 'debug');
    log(`Receiver composite phases: ${receiver.state.primeBases.map(b => b.compositePhase.toFixed(4))}`, 'debug');
    log(`Sender composite amplitudes: ${sender.state.primeBases.map(b => b.compositeAmplitude.toFixed(4))}`, 'debug');
    log(`Receiver composite amplitudes: ${receiver.state.primeBases.map(b => b.compositeAmplitude.toFixed(4))}`, 'debug');
  }
}

/**
 * Decode messages from both agents
 * @param {QuantumCommunicationAgent} sender - Sender agent
 * @param {QuantumCommunicationAgent} receiver - Receiver agent
 * @param {Object} config - Configuration
 * @returns {Object} Decoding results
 */
function decodeMessages(sender, receiver, config) {
  // Decode from sender
  if (config.verbose) log('Decoding message from sender...', 'info');
  const senderDecoded = sender.decodeQuantumMessage(
    config.threshold,
    config.useAmplitudeModulation
  );
  if (config.verbose) log(`Sender decoded: "${senderDecoded}"`, 'info');
  
  // Decode from receiver
  if (config.verbose) log('Decoding message from receiver...', 'info');
  const receiverDecoded = receiver.decodeQuantumMessage(
    config.threshold,
    config.useAmplitudeModulation
  );
  if (config.verbose) log(`Receiver decoded: "${receiverDecoded}"`, 'info');
  
  // Calculate success
  const senderSuccess = senderDecoded === config.message;
  const receiverSuccess = receiverDecoded === config.message;
  
  return { 
    senderSuccess, 
    receiverSuccess, 
    senderDecoded, 
    receiverDecoded 
  };
}

/**
 * Log final results and quantum metrics
 * @param {QuantumCommunicationAgent} sender - Sender agent
 * @param {QuantumCommunicationAgent} receiver - Receiver agent
 * @param {Object} results - Decoding results
 * @param {Object} config - Configuration
 */
function logFinalResults(sender, receiver, results, config) {
  if (config.verbose) {
    if (results.senderSuccess) {
      log('Sender decoding successful!', 'success');
    } else {
      log('Sender decoding failed', 'error');
    }
    
    if (results.receiverSuccess) {
      log('RECEIVER DECODING SUCCESSFUL! Nonlocal communication confirmed!', 'success');
    } else {
      log('Receiver decoding failed', 'error');
    }
    
    // Quantum metrics
    const senderMetrics = sender.measure();
    const receiverMetrics = receiver.measure();
    
    log('Quantum metrics:', 'info');
    log(`Sender:   Resonance=${senderMetrics.resonanceStrength.toFixed(4)}, Entropy=${senderMetrics.entropy.toFixed(4)}`, 'info');
    log(`Receiver: Resonance=${receiverMetrics.resonanceStrength.toFixed(4)}, Entropy=${receiverMetrics.entropy.toFixed(4)}`, 'info');
  }
}

/**
 * Validate evolution test configuration
 * @param {Object} config - Configuration to validate
 * @returns {boolean} True if configuration is valid
 */
export function validateEvolutionTestConfig(config) {
  const requiredFields = ['message', 'primes', 'epsilon', 'threshold', 'delta', 'cycles'];
  
  for (const field of requiredFields) {
    if (!(field in config)) {
      log(`Missing required evolution test field: ${field}`, 'error');
      return false;
    }
  }
  
  if (config.delta <= 0) {
    log('Error: delta must be positive for evolution', 'error');
    return false;
  }
  
  if (config.cycles <= 0) {
    log('Error: cycles must be positive for evolution', 'error');
    return false;
  }
  
  if (config.epsilon <= config.threshold) {
    log('Warning: epsilon should be significantly larger than threshold', 'debug');
  }
  
  return true;
}

/**
 * Create a summary of evolution test parameters
 * @param {Object} config - Test configuration
 * @returns {Object} Parameter summary
 */
export function summarizeEvolutionParameters(config) {
  return {
    message: config.message,
    messageLength: config.message.length,
    primeBases: config.primes.length,
    epsilon: config.epsilon,
    threshold: config.threshold,
    evolutionCycles: config.cycles,
    timeStep: config.delta,
    phaseCorrection: config.enablePhaseCorrection,
    amplitudeModulation: config.useAmplitudeModulation,
    correctionInterval: config.correctionInterval || 'N/A',
    correctionStrength: config.correctionStrength || 'N/A'
  };
}