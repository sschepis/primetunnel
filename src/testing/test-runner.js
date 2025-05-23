/**
 * Main test orchestration for quantum communication system
 */

import { runDirectTest } from './direct-test.js';
import { runEvolutionTest } from './evolution-test.js';
import { log } from '../utils/logger.js';

/**
 * Run comprehensive tests for the quantum communication system
 * @param {Object} config - Test configuration
 * @returns {Promise<Object>} Test results
 */
export async function runComprehensiveTests(config) {
  log('=== QUANTUM NONLOCAL COMMUNICATION TEST SUITE ===', 'system');
  log(`Running in two modes: Direct (no evolution) and Evolution`, 'system');
  
  const results = {
    direct: null,
    evolution: []
  };

  try {
    // Run direct test first
    log('\n=== DIRECT MODE TEST ===', 'system');
    results.direct = await runDirectTest();
    
    // Run evolution tests
    log('\n=== EVOLUTION MODE TESTS ===', 'system');
    log(`Message: "${config.message}"`, 'system');
    logEvolutionParameters(config);
    
    for (let i = 0; i < config.iterations; i++) {
      const result = await runEvolutionTest(config, i + 1);
      results.evolution.push(result);
      
      // Brief pause between iterations
      if (i < config.iterations - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    logFinalResults(results);
    return results;

  } catch (error) {
    log(`Test suite error: ${error.message}`, 'error');
    throw error;
  }
}

/**
 * Log evolution test parameters
 * @param {Object} config - Test configuration
 */
function logEvolutionParameters(config) {
  log('Parameter improvements applied:', 'system');
  log('1. Reduced evolution cycles and step size to minimize phase drift', 'system');
  log('2. Phase correction during evolution process', 'system');
  log('3. Threshold significantly lower than epsilon', 'system');
  log('4. Amplitude modulation alongside phase encoding', 'system');
  log('5. Message length matching prime count', 'system');
  
  log(`\nEvolution parameters:`, 'system');
  log(`- ε=${config.epsilon}, threshold=${config.threshold}`, 'system');
  log(`- δ=${config.delta}, cycles=${config.cycles}, force=${config.messageForce}`, 'system');
  log(`- Phase correction: ${config.enablePhaseCorrection ? 'Enabled' : 'Disabled'}`, 'system');
  log(`- Amplitude modulation: ${config.useAmplitudeModulation ? 'Enabled' : 'Disabled'}`, 'system');
}

/**
 * Log final test results summary
 * @param {Object} results - Test results
 */
function logFinalResults(results) {
  log('\n=== TEST SUITE SUMMARY ===', 'system');
  
  if (results.direct) {
    log(`Direct Test - Sender: ${results.direct.senderSuccess ? 'PASS' : 'FAIL'}, ` +
        `Receiver: ${results.direct.receiverSuccess ? 'PASS' : 'FAIL'}`, 'system');
  }
  
  if (results.evolution.length > 0) {
    const successfulRuns = results.evolution.filter(r => r.senderSuccess && r.receiverSuccess).length;
    const totalRuns = results.evolution.length;
    log(`Evolution Tests - ${successfulRuns}/${totalRuns} successful runs`, 'system');
    log(`Success Rate: ${((successfulRuns / totalRuns) * 100).toFixed(1)}%`, 'system');
  }
  
  log('Test suite completed.', 'system');
}

/**
 * Run a single test iteration with progress reporting
 * @param {Object} config - Test configuration
 * @param {number} iteration - Current iteration number
 * @param {number} totalIterations - Total number of iterations
 * @returns {Promise<Object>} Test result
 */
export async function runSingleTestIteration(config, iteration, totalIterations) {
  log(`\n--- Test Iteration ${iteration}/${totalIterations} ---`, 'system');
  
  try {
    const result = await runEvolutionTest(config, iteration);
    
    // Log iteration result
    const status = (result.senderSuccess && result.receiverSuccess) ? 'SUCCESS' : 'FAILED';
    log(`Iteration ${iteration} ${status}`, result.senderSuccess && result.receiverSuccess ? 'success' : 'error');
    
    return result;
  } catch (error) {
    log(`Iteration ${iteration} failed with error: ${error.message}`, 'error');
    throw error;
  }
}

/**
 * Validate test configuration
 * @param {Object} config - Configuration to validate
 * @throws {Error} If configuration is invalid
 */
export function validateTestConfig(config) {
  const requiredFields = ['message', 'epsilon', 'threshold', 'primes'];
  
  for (const field of requiredFields) {
    if (!(field in config)) {
      throw new Error(`Missing required configuration field: ${field}`);
    }
  }
  
  if (config.epsilon <= config.threshold) {
    log('Warning: epsilon should be significantly larger than threshold for reliable detection', 'debug');
  }
  
  if (config.message.length !== config.primes.length) {
    log('Warning: message length does not match number of prime bases', 'debug');
  }
}