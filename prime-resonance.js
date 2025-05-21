import { pulsarsByPrimes } from './pulsar-frequencies.js'; // Added import

export class PrimeState {
  constructor(sharedPrimeNumbersArray, groupedPulsarData, initialPulsarPhaseFunc, agentConfig) {
    this.primeBases = [];
    const numPrimeBases = sharedPrimeNumbersArray.length;

    for (const primeNum of sharedPrimeNumbersArray) {
      const compositeAmplitudeForBasis = numPrimeBases > 0 ? 1 / Math.sqrt(numPrimeBases) : 0;
      const currentPrimeBasis = {
        originalPrime: primeNum,
        pulsars: [],
        compositePhase: 0, // Will be updated
        compositeAmplitude: compositeAmplitudeForBasis,
      };

      const rawPulsarsForThisBasis = groupedPulsarData[primeNum.toString()] || [];

      if (rawPulsarsForThisBasis.length > 0) {
        const numPulsarsInBasis = rawPulsarsForThisBasis.length;
        for (const rawPulsar of rawPulsarsForThisBasis) {
          const pulsarId = rawPulsar.PSRJ;
          const pulsarFrequency = rawPulsar.Frequency_Hz;
          const pulsarInitialPhase = initialPulsarPhaseFunc(pulsarFrequency);
          // Distribute the basis's composite amplitude among its constituent pulsars
          const pulsarInitialAmplitude = numPulsarsInBasis > 0 ? compositeAmplitudeForBasis / Math.sqrt(numPulsarsInBasis) : 0;

          currentPrimeBasis.pulsars.push({
            id: pulsarId,
            frequency: pulsarFrequency,
            phase: pulsarInitialPhase,
            amplitude: pulsarInitialAmplitude,
          });
        }
        // Set initial composite phase based on the first pulsar, if any
        currentPrimeBasis.compositePhase = currentPrimeBasis.pulsars[0] ? currentPrimeBasis.pulsars[0].phase : 0;
      } else {
        // Handle case with no specific pulsars found for this prime - create a conceptual one
        const conceptualFrequency = primeNum; // Use prime number as a stand-in frequency
        const conceptualPhase = initialPulsarPhaseFunc(conceptualFrequency);
        currentPrimeBasis.pulsars.push({
          id: `conceptual_${primeNum}`,
          frequency: conceptualFrequency,
          phase: conceptualPhase,
          amplitude: compositeAmplitudeForBasis, // The conceptual pulsar gets the full basis amplitude
        });
        currentPrimeBasis.compositePhase = conceptualPhase;
      }
      this.primeBases.push(currentPrimeBasis);
    }
  }

  static goldenRatio = (1 + Math.sqrt(5)) / 2;

  // New method for initial pulsar phase based on its own frequency
  static calculateInitialPulsarPhase(frequency) {
    const golden = PrimeState.goldenRatio;
    // Added small epsilon to avoid log(0) or log of negative if frequency is 0 or invalid
    return ((2 * Math.PI * Math.log(frequency + 1e-9)) / golden) % (2 * Math.PI);
  }

  static idealPhaseDifference(p1, p2) {
    const golden = PrimeState.goldenRatio;
    const harmonic = ((p1 - p2) / (p1 + p2)) * Math.PI / golden;
    return harmonic % (2 * Math.PI);
  }

  evolve(dt, config, messageBits, referenceStatePrimeBases) {
    if (!this.primeBases || this.primeBases.length === 0) return;

    const numBases = this.primeBases.length;

    // --- Amplitude Evolution (Applied to individual pulsars) ---
    // This part remains largely the same as it evolves individual pulsar amplitudes
    // based on their current phase alignment with the message bit.
    const tempPulsarStatesForAmplitude = this.primeBases.flatMap(basis =>
      basis.pulsars.map(p => ({ ...p })) // Create shallow copies for intermediate calculations
    );
    let flatPulsarIndex = 0;

    for (let i = 0; i < numBases; i++) {
      const primeBasis = this.primeBases[i];
      const messageBitForBasis = (messageBits && i < messageBits.length) ? messageBits[i] : null;

      for (let k = 0; k < primeBasis.pulsars.length; k++) {
        const currentPulsar = primeBasis.pulsars[k]; // Evolve based on current state
        const tempPulsar = tempPulsarStatesForAmplitude[flatPulsarIndex];

        if (messageBitForBasis !== null) {
          let alignment = 0;
          if (messageBitForBasis === '1') {
            alignment = -Math.sin(currentPulsar.phase);
          } else { // '0'
            alignment = Math.sin(currentPulsar.phase);
          }
          const effectiveCoupling = (config.amplitudeCouplingStrength || 0.5) * ( (config.messageAttractorForceStrength || 5.0) / primeBasis.originalPrime);
          tempPulsar.amplitude = currentPulsar.amplitude * Math.exp(alignment * effectiveCoupling * dt);
        } else {
          tempPulsar.amplitude = currentPulsar.amplitude; // No change if no message bit
        }
        flatPulsarIndex++;
      }
    }
    
    // Normalize these temporary new amplitudes globally
    let sumOfSquares = tempPulsarStatesForAmplitude.reduce((sum, p) => sum + p.amplitude * p.amplitude, 0);
    if (sumOfSquares > 1e-9) {
      const normFactor = Math.sqrt(sumOfSquares);
      tempPulsarStatesForAmplitude.forEach(p => p.amplitude /= normFactor);
    }

    // Apply normalized amplitudes back and recalculate composite amplitudes
    flatPulsarIndex = 0;
    this.primeBases.forEach(basis => {
      let basisSumSqAmp = 0;
      basis.pulsars.forEach(p => {
        p.amplitude = tempPulsarStatesForAmplitude[flatPulsarIndex].amplitude;
        basisSumSqAmp += p.amplitude * p.amplitude;
        flatPulsarIndex++;
      });
      basis.compositeAmplitude = Math.sqrt(basisSumSqAmp);
    });
    // --- End Amplitude Evolution ---

    // --- Phase Evolution (Applied to individual pulsars, influenced by composite tendencies) ---
    const pulsarDeltaPhases = new Map(); // Store {pulsarRef: deltaPhase}
    const compositePhaseTendencies = new Map(); // Store {basisRef: compositePhaseDelta}

    // 1. Calculate Composite Phase Tendencies (Inter-Basis Resonance)
    for (let i = 0; i < numBases; i++) {
      const primeBasis_i = this.primeBases[i];
      let interBasisResonanceComponent = 0;
      for (let j = 0; j < numBases; j++) {
        if (i === j) continue;
        const primeBasis_j = this.primeBases[j];
        const actualCompositeDelta = primeBasis_i.compositePhase - primeBasis_j.compositePhase;
        const idealCompositeDelta = PrimeState.idealPhaseDifference(primeBasis_i.originalPrime, primeBasis_j.originalPrime);
        interBasisResonanceComponent += Math.sin(actualCompositeDelta - idealCompositeDelta);
      }
      const compositePhaseDelta_i = -dt * (config.interBasisResonanceStrength || 0.1) * interBasisResonanceComponent;
      compositePhaseTendencies.set(primeBasis_i, compositePhaseDelta_i);
    }

    // 2. Calculate Individual Pulsar Phase Deltas
    for (let i = 0; i < numBases; i++) {
      const primeBasis_i = this.primeBases[i];
      const referenceBasis_i = referenceStatePrimeBases ? referenceStatePrimeBases[i] : null;
      const compositeTendency = compositePhaseTendencies.get(primeBasis_i) || 0; // Get the calculated tendency

      for (let k = 0; k < primeBasis_i.pulsars.length; k++) {
        const pulsar_k = primeBasis_i.pulsars[k];
        let totalDeltaPhaseForPulsarK = 0;

        // i. Natural Drift
        totalDeltaPhaseForPulsarK += pulsar_k.frequency * dt;

        // ii. Message Attractor Contribution
        const messageBitForBasis_i = (messageBits && i < messageBits.length) ? messageBits[i] : null;
        if (messageBitForBasis_i !== null && referenceBasis_i && referenceBasis_i.pulsars[k]) {
          const referencePulsar_k = referenceBasis_i.pulsars[k];
          let targetPulsarPhaseForBit;
          if (messageBitForBasis_i === '1') {
            targetPulsarPhaseForBit = (referencePulsar_k.phase + (config.epsilonForEncoding || Math.PI / 64));
          } else { // '0'
            targetPulsarPhaseForBit = referencePulsar_k.phase;
          }
          targetPulsarPhaseForBit = (targetPulsarPhaseForBit % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
          
          let phaseDifferenceToTarget = targetPulsarPhaseForBit - pulsar_k.phase;
          if (phaseDifferenceToTarget > Math.PI) phaseDifferenceToTarget -= 2 * Math.PI;
          if (phaseDifferenceToTarget < -Math.PI) phaseDifferenceToTarget += 2 * Math.PI;
          
          totalDeltaPhaseForPulsarK += ((config.messageAttractorForceStrength || 5.0) / primeBasis_i.originalPrime) * phaseDifferenceToTarget * dt;
        }

        // iii. Intra-Basis Coherence Force (Pull towards basis's current composite phase)
        // Note: compositePhase used here is from the start of the timestep.
        let phaseDiffToComposite = primeBasis_i.compositePhase - pulsar_k.phase;
        if (phaseDiffToComposite > Math.PI) phaseDiffToComposite -= 2 * Math.PI;
        if (phaseDiffToComposite < -Math.PI) phaseDiffToComposite += 2 * Math.PI;
        
        // Incorporate the composite phase tendency into the intra-basis coherence target
        const targetCoherencePhase = (primeBasis_i.compositePhase + compositeTendency);
        let phaseDiffToInfluencedComposite = targetCoherencePhase - pulsar_k.phase;
        if (phaseDiffToInfluencedComposite > Math.PI) phaseDiffToInfluencedComposite -= 2 * Math.PI;
        if (phaseDiffToInfluencedComposite < -Math.PI) phaseDiffToInfluencedComposite += 2 * Math.PI;

        totalDeltaPhaseForPulsarK += dt * (config.intraBasisCoherenceStrength || 0.05) * phaseDiffToInfluencedComposite;
        
        pulsarDeltaPhases.set(pulsar_k, totalDeltaPhaseForPulsarK);
      }
    }

    // 3. Apply Phase Updates and 4. Recalculate Composite Phases
    this.primeBases.forEach(basis => {
      let sumWeightedPhasesX = 0;
      let sumWeightedPhasesY = 0;
      let sumWeights = 0;

      basis.pulsars.forEach(pulsar => {
        const delta = pulsarDeltaPhases.get(pulsar) || 0;
        pulsar.phase = (pulsar.phase + delta % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

        // For circular mean (amplitude-weighted)
        const weight = pulsar.amplitude; // Use current amplitude as weight
        sumWeightedPhasesX += weight * Math.cos(pulsar.phase);
        sumWeightedPhasesY += weight * Math.sin(pulsar.phase);
        sumWeights += weight;
      });

      if (basis.pulsars.length > 0 && sumWeights > 1e-9) {
        basis.compositePhase = Math.atan2(sumWeightedPhasesY / sumWeights, sumWeightedPhasesX / sumWeights);
        basis.compositePhase = (basis.compositePhase % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
      } else if (basis.pulsars.length > 0) {
         // Fallback to simple average if all weights are zero (unlikely with proper amplitude handling)
        basis.compositePhase = (basis.pulsars.reduce((sum, p) => sum + p.phase, 0) / basis.pulsars.length) % (2 * Math.PI);
        basis.compositePhase = (basis.compositePhase + 2 * Math.PI) % (2 * Math.PI); // Ensure positive
      } else {
        basis.compositePhase = 0;
      }
    });
    // --- End Phase Evolution ---
  }

  modulatePrimeBasisPhase(basisIndex, bit, epsilon, referenceBasisState) {
    const primeBasisToModulate = this.primeBases[basisIndex];
    if (!primeBasisToModulate || !referenceBasisState) return;

    for (let k = 0; k < primeBasisToModulate.pulsars.length; k++) {
      const pulsar_k = primeBasisToModulate.pulsars[k];
      const referencePulsar_k = referenceBasisState.pulsars[k]; // Assumes pulsars are in same order & count

      if (!referencePulsar_k) continue; // Safety check

      let targetPulsarPhase;
      if (bit === '1') {
        targetPulsarPhase = (referencePulsar_k.phase + epsilon);
      } else { // Assumed '0'
        targetPulsarPhase = referencePulsar_k.phase;
      }
      pulsar_k.phase = (targetPulsarPhase % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    }

    // Recalculate compositePhase for the modulated basis
    if (primeBasisToModulate.pulsars.length > 0) {
      // Simple average for now, can be replaced with circular mean or weighted mean later
      let sumPhases = 0;
      primeBasisToModulate.pulsars.forEach(p => sumPhases += p.phase);
      primeBasisToModulate.compositePhase = (sumPhases / primeBasisToModulate.pulsars.length) % (2 * Math.PI);
      primeBasisToModulate.compositePhase = (primeBasisToModulate.compositePhase + 2 * Math.PI) % (2 * Math.PI); // Ensure positive
    } else {
      primeBasisToModulate.compositePhase = 0;
    }
  }

  normalizeAllPulsarAmplitudes() {
    const allPulsars = [];
    this.primeBases.forEach(basis => {
      basis.pulsars.forEach(p => allPulsars.push(p));
    });

    if (allPulsars.length === 0) return;

    let sumOfSquares = 0;
    allPulsars.forEach(p => {
      sumOfSquares += p.amplitude * p.amplitude;
    });

    if (sumOfSquares > 1e-9) { // Avoid division by zero or issues with extremely small numbers.
      const normFactor = Math.sqrt(sumOfSquares);
      allPulsars.forEach(p => {
        p.amplitude /= normFactor;
      });
    }
    // If sumOfSquares is ~0, amplitudes effectively remain ~0 or their current small values.
  }

  clone() {
    // Deep clone for the new structure
    const clonedPrimeBases = this.primeBases.map(basis => ({
      ...basis, // copy originalPrime, compositePhase, compositeAmplitude
      pulsars: basis.pulsars.map(pulsar => ({ ...pulsar })), // copy individual pulsar states
    }));
    
    // The constructor will need to be adapted if we want to use it for cloning,
    // or we create a new PrimeState and manually assign clonedPrimeBases.
    // For now, let's assume a simplified clone that might need a dedicated method or
    // rely on the new constructor being flexible enough.
    // This is a placeholder and needs careful implementation.
    const clonedState = Object.create(PrimeState.prototype); // Create new instance without calling constructor
    clonedState.primeBases = clonedPrimeBases;
    return clonedState;
  }
}

export class Metrics {
  static resonanceStrength(state, reference) { // state and reference are PrimeState objects
    if (!state || !state.primeBases || !reference || !reference.primeBases || state.primeBases.length !== reference.primeBases.length) {
      return 0;
    }
    let totalCloseness = 0;
    let numComparisons = 0;

    for (let i = 0; i < state.primeBases.length; i++) {
      const basisState = state.primeBases[i];
      const basisRef = reference.primeBases[i];

      if (basisState.pulsars.length > 0 && basisState.pulsars.length === basisRef.pulsars.length) {
        // Compare composite phases of the prime bases
        let delta = Math.abs(basisState.compositePhase - basisRef.compositePhase) % (2 * Math.PI);
        delta = Math.min(delta, 2 * Math.PI - delta); // shortest angle
        const closeness = 1 - delta / Math.PI; // 1 for identical, 0 for PI apart
        totalCloseness += closeness;
        numComparisons++;
      }
    }
    return numComparisons > 0 ? totalCloseness / numComparisons : 0;
  }

  static entropy(state) { // state is a PrimeState object
    if (!state || !state.primeBases) return 0;
    
    // Calculate entropy based on the distribution of composite amplitudes of prime bases
    const compositeAmplitudes = state.primeBases.map(basis => basis.compositeAmplitude);
    const probs = compositeAmplitudes.map(a => a * a); // Probabilities are square of amplitudes
    
    let entropyVal = 0;
    probs.forEach(p => {
      if (p > 1e-9) { // Avoid log(0)
        entropyVal -= p * Math.log2(p);
      }
    });
    return entropyVal;
  }
}

export class CommunicationAgent {
  state;
  referenceState;

  constructor(sharedPrimeNumbersArray, agentConfig) { // agentConfig contains the main CONFIG
    const primeBasesToUse = sharedPrimeNumbersArray;
    // Ensure agentConfig and agentConfig.maxPulsarsPerPrime are defined
    const maxPulsars = agentConfig && agentConfig.maxPulsarsPerPrime !== undefined
                       ? agentConfig.maxPulsarsPerPrime
                       : 3; // Default to 3 if not specified
    
    // Ensure pulsarsByPrimes is available (it's imported at the top)
    const groupedPulsars = pulsarsByPrimes(primeBasesToUse, maxPulsars);
    
    this.state = new PrimeState(primeBasesToUse, groupedPulsars, PrimeState.calculateInitialPulsarPhase, agentConfig);
    this.referenceState = this.state.clone();
  }

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

  evolve(timestep, agentConfig, messageBits) { // agentConfig is the main CONFIG from enhanced-nonlocal
    if (!this.state || !this.referenceState || !this.referenceState.primeBases) {
      console.error("State or referenceState not properly initialized for evolve.");
      return;
    }
    const evolutionConfig = {
      interBasisResonanceStrength: agentConfig.resonanceStrength,
      messageAttractorForceStrength: agentConfig.messageForce,
      epsilonForEncoding: agentConfig.epsilon,
      amplitudeCouplingStrength: agentConfig.amplitudeCouplingStrength !== undefined
                                 ? agentConfig.amplitudeCouplingStrength : 0.5, // Default
      intraBasisCoherenceStrength: agentConfig.intraBasisCoherenceStrength !== undefined
                                   ? agentConfig.intraBasisCoherenceStrength : 0.05, // Default
    };
    this.state.evolve(timestep, evolutionConfig, messageBits, this.referenceState.primeBases);
  }

  measure() {
    const rStrength = Metrics.resonanceStrength(this.state, this.referenceState);
    const entropy = Metrics.entropy(this.state);
    return { resonanceStrength: rStrength, entropy };
  }

  decodeMessage(threshold) {
    if (!this.state || !this.state.primeBases || !this.referenceState || !this.referenceState.primeBases) {
      console.error("State or primeBases not initialized for decodeMessage.");
      return "";
    }

    const finalDecodedBits = [];
    for (let i = 0; i < this.state.primeBases.length; i++) {
      const primeBasis_i = this.state.primeBases[i];
      const referenceBasis_i = this.referenceState.primeBases[i];

      if (!primeBasis_i || !primeBasis_i.pulsars || !referenceBasis_i || !referenceBasis_i.pulsars || primeBasis_i.pulsars.length === 0) {
        console.warn(`Skipping decode for prime basis ${i}: missing data or no pulsars.`);
        finalDecodedBits.push('0'); // Default to '0' if basis is problematic
        continue;
      }

      let voteForOne = 0;
      let voteForZero = 0;

      for (let k = 0; k < primeBasis_i.pulsars.length; k++) {
        const pulsar_k = primeBasis_i.pulsars[k];
        const referencePulsar_k = referenceBasis_i.pulsars[k]; // Assumes pulsars are in same order & count

        if (!pulsar_k || !referencePulsar_k) {
          console.warn(`Skipping pulsar k=${k} in basis i=${i} during decode: missing pulsar data.`);
          continue;
        }

        let deltaPulsarPhase = pulsar_k.phase - referencePulsar_k.phase;
        // Normalize to shortest angle, then take absolute for threshold comparison if needed,
        // but here we care about deviation from reference.
        // The original encoding adds +epsilon for '1'. So, a phase > referencePhase (by enough) means '1'.
        // A more robust check might be: (pulsar_k.phase - referencePulsar_k.phase + 2*PI) % (2*PI)
        // If this delta is between threshold and PI, it's a '1'.
        // If it's between -PI and -threshold (or PI and 2*PI-threshold), it's also a '1' if epsilon was negative.
        // Given encoding is +epsilon for '1', we expect phase to be greater.
        
        // Let's use the definition: if (current_phase - reference_phase) is "closer" to epsilon than to 0.
        // Or simpler: if abs(current_phase - (reference_phase + epsilon)) < abs(current_phase - reference_phase)
        // For now, using the plan's simpler threshold logic:
        // A positive deviation from reference (after normalization) greater than threshold implies '1'.
        
        let normalizedDelta = (pulsar_k.phase - referencePulsar_k.phase);
        while (normalizedDelta <= -Math.PI) normalizedDelta += 2 * Math.PI;
        while (normalizedDelta > Math.PI) normalizedDelta -= 2 * Math.PI;
        // normalizedDelta is now in (-PI, PI].
        // If original encoding was +epsilon, we expect a positive delta for '1'.

        if (normalizedDelta > threshold) { // If phase advanced significantly beyond reference
          voteForOne++;
        } else { // Includes small positive deviations, zero, or negative deviations
          voteForZero++;
        }
      }

      if (voteForOne > voteForZero) {
        finalDecodedBits.push('1');
      } else if (voteForZero > voteForOne) {
        finalDecodedBits.push('0');
      } else {
        finalDecodedBits.push('0'); // Tie-breaking rule: default to '0'
      }
    }
    return finalDecodedBits.join('');
  }
}