/**
 * Direct mode test (no evolution) for quantum communication
 */

import { QuantumCommunicationAgent } from '../communication/quantum-communication-agent.js';
import { DIRECT_CONFIG } from '../config.js';
import { log } from '../utils/logger.js';

/**
 * Run the direct test (no evolution)
 * @returns {Promise<Object>} Test results with sender and receiver success flags
 */
export async function runDirectTest() {
  log('\n=== DIRECT MODE (NO EVOLUTION) ===', 'system');
  log(`Message: "${DIRECT_CONFIG.message}"`, 'system');
  log(`Parameters: ε=${DIRECT_CONFIG.epsilon}, threshold=${DIRECT_CONFIG.threshold}`, 'system');
  
  try {
    // Step 1: Initialize agents
    log('Initializing agents...', 'info');
    const sender = new QuantumCommunicationAgent(DIRECT_CONFIG.primes, DIRECT_CONFIG);
    const receiver = new QuantumCommunicationAgent(DIRECT_CONFIG.primes, DIRECT_CONFIG);
    
    // Step 2: Encode message
    log(`Encoding message "${DIRECT_CONFIG.message}" into sender's quantum state...`, 'info');
    sender.sendQuantumMessage(DIRECT_CONFIG.message, DIRECT_CONFIG.epsilon, 0);
    
    // Verify encoding
    const encodingValid = verifyMessageEncoding(sender);
    if (!encodingValid) {
      log('Message encoding has errors', 'error');
      return { senderSuccess: false, receiverSuccess: false };
    }
    
    // Step 3: Decode message from sender
    log('Decoding message from sender...', 'info');
    const senderDecoded = sender.decodeQuantumMessage(DIRECT_CONFIG.threshold, false);
    log(`Sender decoded: "${senderDecoded}"`, 'info');
    
    const senderSuccess = senderDecoded === DIRECT_CONFIG.message;
    if (senderSuccess) {
      log('Sender decoding successful', 'success');
    } else {
      log('Sender decoding failed', 'error');
      return { senderSuccess, receiverSuccess: false };
    }
    
    // Step 4: Direct transfer of quantum state
    log('Simulating nonlocal quantum state transfer...', 'info');
    
    // Direct copy to simulate perfect quantum correlation
    receiver.state = sender.state.clone();
    receiver.referenceState = sender.referenceState.clone();

    // Step 5: Decode message from receiver
    log('Decoding message from receiver after quantum state transfer...', 'info');
    const receiverDecoded = receiver.decodeQuantumMessage(DIRECT_CONFIG.threshold, false);
    log(`Receiver decoded: "${receiverDecoded}"`, 'info');
    
    const receiverSuccess = receiverDecoded === DIRECT_CONFIG.message;
    if (receiverSuccess) {
      log('NONLOCAL COMMUNICATION SUCCESSFUL!', 'success');
    } else {
      log('Receiver decoding failed', 'error');
    }
    
    return { senderSuccess, receiverSuccess };

  } catch (error) {
    log(`Direct test error: ${error.message}`, 'error');
    return { senderSuccess: false, receiverSuccess: false };
  }
}

/**
 * Verify that the message was correctly encoded in the quantum state
 * @param {QuantumCommunicationAgent} sender - Sender agent to verify
 * @returns {boolean} True if encoding is correct
 */
function verifyMessageEncoding(sender) {
  log('Verifying message encoding...', 'debug');
  let correctlyEncoded = true;
  
  for (let i = 0; i < DIRECT_CONFIG.message.length; i++) {
    const bit = DIRECT_CONFIG.message[i];
    const expectedDelta = bit === '1' ? DIRECT_CONFIG.epsilon : 0;
    
    // Verify based on the composite phase of the prime basis
    const senderBasis = sender.state.primeBases[i];
    const refBasis = sender.referenceState.primeBases[i];
    
    if (!senderBasis || !refBasis) {
      log(`Error in bit ${i}: Basis not found.`, 'error');
      correctlyEncoded = false;
      continue;
    }
    
    // Check the composite phase for overall effect
    const actualDelta = Math.abs(senderBasis.compositePhase - refBasis.compositePhase);
    
    // Handle phase wrapping for delta
    let wrappedDelta = actualDelta % (2 * Math.PI);
    if (wrappedDelta > Math.PI) wrappedDelta = 2 * Math.PI - wrappedDelta;

    if (Math.abs(wrappedDelta - expectedDelta) > 0.0001) {
      log(`Error in bit ${i}: Expected Δφ=${expectedDelta}, got ${actualDelta.toFixed(4)}`, 'error');
      correctlyEncoded = false;
    }
  }
  
  if (correctlyEncoded) {
    log('Message successfully encoded in quantum state', 'success');
  }
  
  return correctlyEncoded;
}

/**
 * Validate direct test configuration
 * @param {Object} config - Configuration to validate
 * @returns {boolean} True if configuration is valid
 */
export function validateDirectTestConfig(config = DIRECT_CONFIG) {
  if (!config.message || !config.primes || !config.epsilon || !config.threshold) {
    log('Invalid direct test configuration: missing required fields', 'error');
    return false;
  }
  
  if (config.message.length !== config.primes.length) {
    log('Warning: message length does not match number of primes in direct test', 'debug');
  }
  
  if (config.epsilon <= config.threshold) {
    log('Warning: epsilon should be larger than threshold for reliable detection', 'debug');
  }
  
  return true;
}