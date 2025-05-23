import { QuantumCommunicationAgent } from './core.js';
import { CONFIG } from './config.js';
import { evolveWithMessageResonance } from './quantum/message-resonance.js';
import { createQuantumEntanglement } from './quantum/nonlocal-evolution.js';

export async function runMessageResonanceTest(configOverride = {}) {
  const testConfig = { 
    ...CONFIG, 
    ...configOverride,
    // Message resonance parameters
    messageResonanceStrength: configOverride.messageResonanceStrength || 1.0,
    enableSenderStabilization: configOverride.enableSenderStabilization !== false,
    senderStabilizationStrength: configOverride.senderStabilizationStrength || 0.3,
    enableQuantumField: configOverride.enableQuantumField !== false,
    quantumFieldStrength: configOverride.quantumFieldStrength || 0.5
  };

  console.log(`\n=== MESSAGE RESONANCE NONLOCAL TEST ===`);
  console.log(`Message: "${testConfig.message}"`);
  console.log(`Message resonance: ${testConfig.messageResonanceStrength}`);
  console.log(`Quantum field: ${testConfig.enableQuantumField ? 'ON' : 'OFF'}`);
  console.log(`Cycles: ${testConfig.cycles}, Delta: ${testConfig.delta}`);
  console.log(`Epsilon: ${testConfig.epsilon}, Threshold: ${testConfig.threshold}`);

  const sender = new QuantumCommunicationAgent(testConfig.primes, testConfig);
  const receiver = new QuantumCommunicationAgent(testConfig.primes, testConfig);

  // Create quantum entanglement
  createQuantumEntanglement(sender, receiver, 0.95);
  console.log(`\nQuantum entanglement established.`);

  // Encode message in sender
  sender.sendQuantumMessage(
    testConfig.message,
    testConfig.epsilon,
    testConfig.useAmplitudeModulation ? testConfig.amplitudeEpsilon : 0
  );

  // Track convergence
  const history = [];
  let lastReceiverDecoded = '';
  let convergenceCount = 0;
  const requiredConvergence = 5; // Must see same result 5 times in a row

  console.log(`\nEvolution progress:`);
  
  for (let i = 0; i < testConfig.cycles; i++) {
    // Use message-focused evolution
    evolveWithMessageResonance(sender, receiver, testConfig.delta, testConfig, testConfig.message);

    // Check progress periodically
    if (i % Math.max(1, Math.floor(testConfig.cycles / 20)) === 0 || i === testConfig.cycles - 1) {
      const senderDecoded = sender.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
      const receiverDecoded = receiver.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
      const resonance = sender.measure().resonanceStrength;
      
      // Track convergence
      if (receiverDecoded === lastReceiverDecoded) {
        convergenceCount++;
      } else {
        convergenceCount = 1;
        lastReceiverDecoded = receiverDecoded;
      }
      
      history.push({
        cycle: i,
        sender: senderDecoded,
        receiver: receiverDecoded,
        resonance: resonance,
        converged: convergenceCount >= requiredConvergence
      });
      
      console.log(`  Cycle ${i}: S="${senderDecoded}" R="${receiverDecoded}" Res=${resonance.toFixed(3)}${receiverDecoded === testConfig.message ? ' ✓' : ''}`);
      
      // Early success detection
      if (receiverDecoded === testConfig.message && convergenceCount >= requiredConvergence) {
        console.log(`\n🎯 Early convergence detected at cycle ${i}!`);
        break;
      }
    }
  }

  // Final measurement
  const senderDecoded = sender.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
  const receiverDecoded = receiver.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);

  const senderSuccess = senderDecoded === testConfig.message;
  const receiverSuccess = receiverDecoded === testConfig.message;

  console.log(`\n=== FINAL RESULTS ===`);
  console.log(`Sender decoded:   "${senderDecoded}" ${senderSuccess ? '✓' : '✗'}`);
  console.log(`Receiver decoded: "${receiverDecoded}" ${receiverSuccess ? '✓' : '✗'}`);

  const senderMetrics = sender.measure();
  const receiverMetrics = receiver.measure();

  console.log(`\nQuantum metrics:`);
  console.log(`Sender:   Resonance=${senderMetrics.resonanceStrength.toFixed(4)}, Entropy=${senderMetrics.entropy.toFixed(4)}`);
  console.log(`Receiver: Resonance=${receiverMetrics.resonanceStrength.toFixed(4)}, Entropy=${receiverMetrics.entropy.toFixed(4)}`);

  // Analyze phase alignment
  console.log(`\nPhase alignment analysis:`);
  for (let i = 0; i < Math.min(4, sender.state.primeBases.length); i++) {
    const sBasis = sender.state.primeBases[i];
    const rBasis = receiver.state.primeBases[i];
    const sRefBasis = sender.referenceState.primeBases[i];
    const rRefBasis = receiver.referenceState.primeBases[i];
    
    const senderDiff = Math.abs(sBasis.compositePhase - sRefBasis.compositePhase);
    const receiverDiff = Math.abs(rBasis.compositePhase - rRefBasis.compositePhase);
    const targetBit = i < testConfig.message.length ? testConfig.message[i] : '0';
    const expectedDiff = targetBit === '1' ? testConfig.epsilon : 0;
    
    console.log(`  Bit ${i} (${targetBit}): S_diff=${senderDiff.toFixed(3)}, R_diff=${receiverDiff.toFixed(3)}, Expected=${expectedDiff.toFixed(3)}`);
  }

  if (receiverSuccess) {
    console.log(`\n✅ SUCCESS: Receiver converged to sender's message through quantum resonance!`);
  } else {
    console.log(`\n❌ FAILURE: Receiver did not converge to the message.`);
    
    // Suggest parameter adjustments
    console.log(`\nSuggestions:`);
    if (receiverMetrics.resonanceStrength < 0.5) {
      console.log(`  - Increase message resonance strength (current: ${testConfig.messageResonanceStrength})`);
    }
    if (history.some(h => h.receiver === testConfig.message)) {
      console.log(`  - Increase cycles or decrease threshold (receiver briefly saw correct message)`);
    }
    console.log(`  - Try enabling phase correction or adjusting epsilon`);
  }

  return { senderSuccess, receiverSuccess, history };
}