import { runDirectTest, runEvolutionTest } from './src/core.js';
import { log } from './src/utils/logger.js';
import { CONFIG as BASE_CONFIG } from './src/config.js';

// Enhanced CONFIG for the test runner with proper evolution parameters
const CONFIG = {
  ...BASE_CONFIG,
  message: '1010',  // Use shorter message that matches prime count
  iterations: 5,
  epsilon: 0.01,
  threshold: 0.001,
  delta: 0.1,
  cycles: 100,
  messageForce: 25,
  enablePhaseCorrection: true,
  useAmplitudeModulation: true,
  verbose: true,
};

// Main test runner
async function main() {
  log('=== QUANTUM NONLOCAL COMMUNICATION TEST ===', 'system');
  log(`Running in two modes: Direct (no evolution) and Evolution`, 'system');
  
  // First run the direct test (no evolution)
  const directResult = await runDirectTest();
  
  // Then run the evolution test using the global CONFIG
  log('\n=== EVOLUTION MODE ===', 'system');
  log(`Message: "${CONFIG.message}"`, 'system'); // main still uses global CONFIG for its own run
  log('Parameter improvements applied:', 'system');
  log('1. Reduced evolution cycles and step size to minimize phase drift', 'system');
  log('2. Phase correction during evolution process', 'system');
  log('3. Threshold significantly lower than epsilon', 'system');
  log('4. Amplitude modulation alongside phase encoding', 'system');
  log('5. Message length matching prime count', 'system');
  
  log(`\nEvolution parameters:`, 'system');
  log(`- ε=${CONFIG.epsilon}, threshold=${CONFIG.threshold}`, 'system');
  log(`- δ=${CONFIG.delta}, cycles=${CONFIG.cycles}, force=${CONFIG.messageForce}`, 'system');
  log(`- Phase correction: ${CONFIG.enablePhaseCorrection ? 'Enabled' : 'Disabled'}`, 'system');
  log(`- Amplitude modulation: ${CONFIG.useAmplitudeModulation ? 'Enabled' : 'Disabled'}`, 'system');
  
  const results = [];
  
  for (let i = 0; i < CONFIG.iterations; i++) {
    // Pass global CONFIG and current iteration number + 1 when main() calls it
    const result = await runEvolutionTest(CONFIG, i + 1);
    results.push(result);
    
    // Brief pause between iterations
    if (i < CONFIG.iterations - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
}

main()
  .then(() => {
    log('All tests completed successfully.', 'system');
  })
  .catch(error => {
    log(`Error: ${error.message}`, 'error');
  });
// .finally(() => {
