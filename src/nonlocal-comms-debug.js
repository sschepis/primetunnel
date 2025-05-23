import { QuantumCommunicationAgent } from './core.js';
import { CONFIG } from './config.js';

export async function runStrictNonLocalTestDebug(configOverride = {}) {
  const testConfig = { 
    ...CONFIG, 
    ...configOverride,
    // Add nonlocal coupling parameters if not provided
    nonlocalCouplingStrength: configOverride.nonlocalCouplingStrength || 0.8,
    enableQuantumCorrelation: configOverride.enableQuantumCorrelation !== false,
    quantumCorrelationStrength: configOverride.quantumCorrelationStrength || 0.3
  };

  console.log(`\n=== STRICT NONLOCAL TEST (DEBUG) ===`);
  console.log(`Message: "${testConfig.message}"`);
  console.log(`Nonlocal coupling: ${testConfig.nonlocalCouplingStrength}, Quantum correlation: ${testConfig.enableQuantumCorrelation}`);

  const sender = new QuantumCommunicationAgent(testConfig.primes, testConfig);
  const receiver = new QuantumCommunicationAgent(testConfig.primes, testConfig);

  // Import the new quantum entanglement functions
  const { createQuantumEntanglement, evolveEntangledStates } = await import('./quantum/nonlocal-evolution.js');

  // Create quantum entanglement between sender and receiver
  createQuantumEntanglement(sender, receiver, 0.95);
  console.log(`Quantum entanglement established.`);

  // Log initial states
  console.log(`\nInitial phase differences per basis:`);
  for (let i = 0; i < sender.state.primeBases.length; i++) {
    const sPhase = sender.state.primeBases[i].compositePhase;
    const rPhase = receiver.state.primeBases[i].compositePhase;
    const diff = Math.abs(sPhase - rPhase);
    console.log(`  Basis ${i}: Sender=${sPhase.toFixed(3)}, Receiver=${rPhase.toFixed(3)}, Diff=${diff.toFixed(3)}`);
  }

  sender.sendQuantumMessage(
    testConfig.message,
    testConfig.epsilon,
    testConfig.useAmplitudeModulation ? testConfig.amplitudeEpsilon : 0
  );

  console.log(`\nAfter encoding message:`);
  for (let i = 0; i < sender.state.primeBases.length; i++) {
    const sPhase = sender.state.primeBases[i].compositePhase;
    const rPhase = receiver.state.primeBases[i].compositePhase;
    const diff = Math.abs(sPhase - rPhase);
    console.log(`  Basis ${i}: Sender=${sPhase.toFixed(3)}, Receiver=${rPhase.toFixed(3)}, Diff=${diff.toFixed(3)}`);
  }

  // Store reference states for evolution
  const senderReference = sender.referenceState;
  const receiverReference = receiver.referenceState;

  // Track convergence
  const convergenceHistory = [];

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

    // Log detailed progress
    if (i % Math.max(1, Math.floor(testConfig.cycles / 10)) === 0) {
      const senderDecoded = sender.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
      const receiverDecoded = receiver.decodeQuantumMessage(testConfig.threshold, testConfig.useAmplitudeModulation);
      const resonance = sender.measure().resonanceStrength;
      
      convergenceHistory.push({
        cycle: i,
        sender: senderDecoded,
        receiver: receiverDecoded,
        resonance: resonance
      });
      
      console.log(`\nCycle ${i}:`);
      console.log(`  Sender: "${senderDecoded}", Receiver: "${receiverDecoded}", Resonance: ${resonance.toFixed(3)}`);
      
      // Show phase differences for each bit
      for (let j = 0; j < Math.min(4, sender.state.primeBases.length); j++) {
        const sBasis = sender.state.primeBases[j];
        const rBasis = receiver.state.primeBases[j];
        const phaseDiff = Math.abs(sBasis.compositePhase - rBasis.compositePhase);
        const targetBit = j < testConfig.message.length ? testConfig.message[j] : '0';
        console.log(`  Bit ${j} (target=${targetBit}): phaseDiff=${phaseDiff.toFixed(3)}`);
      }
    }
  }

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

  // Analyze convergence pattern
  console.log(`\nConvergence Analysis:`);
  let stabilized = false;
  for (let i = 1; i < convergenceHistory.length; i++) {
    if (convergenceHistory[i].receiver === convergenceHistory[i-1].receiver) {
      if (!stabilized) {
        console.log(`  Receiver stabilized at cycle ${convergenceHistory[i].cycle} with "${convergenceHistory[i].receiver}"`);
        stabilized = true;
      }
    } else {
      stabilized = false;
    }
  }

  if (receiverSuccess) {
    console.log(`✅ SUCCESS: Receiver converged to sender's message nonlocally.`);
  } else {
    console.log(`❌ FAILURE: Receiver did not converge.`);
  }

  return { senderSuccess, receiverSuccess, convergenceHistory };
}