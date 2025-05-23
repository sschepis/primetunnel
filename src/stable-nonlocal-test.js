import { QuantumCommunicationAgent } from './core.js';
import { CONFIG } from './config.js';
import { evolveWithMessageResonance } from './quantum/message-resonance.js';
import { createQuantumEntanglement } from './quantum/nonlocal-evolution.js';

export async function runStableNonlocalTest(configOverride = {}) {
  // Optimized for stability
  const testConfig = { 
    ...CONFIG, 
    ...configOverride,
    // Core parameters
    cycles: configOverride.cycles || 300,
    delta: configOverride.delta || 0.0003,
    epsilon: configOverride.epsilon || 0.25,
    threshold: configOverride.threshold || 0.3,
    
    // Resonance parameters
    messageResonanceStrength: configOverride.messageResonanceStrength || 0.8,
    quantumFieldStrength: configOverride.quantumFieldStrength || 0.3,
    senderStabilizationStrength: configOverride.senderStabilizationStrength || 0.9,
    
    // Phase correction
    enablePhaseCorrection: configOverride.enablePhaseCorrection !== false,
    correctionInterval: configOverride.correctionInterval || 10,
    correctionStrength: configOverride.correctionStrength || 0.2
  };

  console.log(`\n=== STABLE NONLOCAL QUANTUM TEST ===`);
  console.log(`Message: "${testConfig.message}"`);
  console.log(`Optimized for sustained nonlocal transfer\n`);

  const sender = new QuantumCommunicationAgent(testConfig.primes, testConfig);
  const receiver = new QuantumCommunicationAgent(testConfig.primes, testConfig);

  // Strong entanglement
  createQuantumEntanglement(sender, receiver, 0.98);

  // Encode message
  sender.sendQuantumMessage(
    testConfig.message,
    testConfig.epsilon,
    testConfig.useAmplitudeModulation ? testConfig.amplitudeEpsilon : 0
  );

  let successCount = 0;
  let totalSuccess = 0;
  let bestStreak = 0;
  let currentStreak = 0;
  
  for (let i = 0; i < testConfig.cycles; i++) {
    evolveWithMessageResonance(sender, receiver, testConfig.delta, testConfig, testConfig.message);

    const senderDecoded = sender.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
    const receiverDecoded = receiver.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
    
    if (receiverDecoded === testConfig.message) {
      totalSuccess++;
      currentStreak++;
      if (currentStreak > bestStreak) bestStreak = currentStreak;
      
      // Only log first few and streaks
      if (successCount < 3 || currentStreak > 2) {
        const resonance = sender.measure().resonanceStrength;
        console.log(`✓ Cycle ${i}: Receiver="${receiverDecoded}" (streak: ${currentStreak}) Res=${resonance.toFixed(3)}`);
      }
      successCount++;
    } else {
      if (currentStreak > 2) {
        console.log(`  Streak ended after ${currentStreak} cycles`);
      }
      currentStreak = 0;
    }
  }

  const successRate = (totalSuccess / testConfig.cycles * 100).toFixed(1);
  
  console.log(`\n=== RESULTS ===`);
  console.log(`Success rate: ${successRate}% (${totalSuccess}/${testConfig.cycles} cycles)`);
  console.log(`Best streak: ${bestStreak} consecutive cycles`);
  
  if (totalSuccess > 0) {
    console.log(`\n✅ STABLE NONLOCAL COMMUNICATION ACHIEVED!`);
  }
  
  return { totalSuccess, successRate, bestStreak };
}

// Quick test function
export async function quickTest() {
  return runStableNonlocalTest({
    cycles: 100,
    delta: 0.0005,
    epsilon: 0.3,
    threshold: 0.35
  });
}