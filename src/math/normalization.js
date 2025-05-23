/**
 * Amplitude normalization utilities for quantum states
 */

/**
 * Normalize all pulsar amplitudes globally across all prime bases
 * @param {Array} primeBases - Array of prime basis objects
 */
export function normalizeAllPulsarAmplitudes(primeBases) {
  if (!primeBases || primeBases.length === 0) return;
  
  const allPulsars = [];
  primeBases.forEach(basis => {
    basis.pulsars.forEach(p => allPulsars.push(p));
  });

  if (allPulsars.length === 0) return;

  let sumOfSquares = 0;
  allPulsars.forEach(p => {
    sumOfSquares += p.amplitude * p.amplitude;
  });

  if (sumOfSquares > 1e-9) { // Avoid division by zero or issues with extremely small numbers
    const normFactor = Math.sqrt(sumOfSquares);
    allPulsars.forEach(p => {
      p.amplitude /= normFactor;
    });
  }
  // If sumOfSquares is ~0, amplitudes effectively remain ~0 or their current small values
}

/**
 * Recalculate composite amplitudes for all prime bases
 * @param {Array} primeBases - Array of prime basis objects
 */
export function updateCompositeAmplitudes(primeBases) {
  if (!primeBases) return;
  
  primeBases.forEach(basis => {
    if (basis.pulsars && basis.pulsars.length > 0) {
      let sumSqAmp = 0;
      basis.pulsars.forEach(p => sumSqAmp += p.amplitude * p.amplitude);
      basis.compositeAmplitude = Math.sqrt(sumSqAmp);
    } else {
      basis.compositeAmplitude = 0;
    }
  });
}

/**
 * Initialize normalized amplitudes for a set of prime bases
 * @param {Array} primeBases - Array of prime basis objects
 */
export function initializeNormalizedAmplitudes(primeBases) {
  if (!primeBases || primeBases.length === 0) return;
  
  const numPrimeBases = primeBases.length;
  const compositeAmplitudeForBasis = numPrimeBases > 0 ? 1 / Math.sqrt(numPrimeBases) : 0;
  
  primeBases.forEach(basis => {
    basis.compositeAmplitude = compositeAmplitudeForBasis;
    
    if (basis.pulsars && basis.pulsars.length > 0) {
      const numPulsarsInBasis = basis.pulsars.length;
      const pulsarInitialAmplitude = numPulsarsInBasis > 0 ? 
        compositeAmplitudeForBasis / Math.sqrt(numPulsarsInBasis) : 0;
      
      basis.pulsars.forEach(pulsar => {
        pulsar.amplitude = pulsarInitialAmplitude;
      });
    }
  });
}

/**
 * Ensure all amplitudes are non-negative
 * @param {Array} primeBases - Array of prime basis objects
 */
export function ensureNonNegativeAmplitudes(primeBases) {
  if (!primeBases) return;
  
  primeBases.forEach(basis => {
    if (basis.pulsars) {
      basis.pulsars.forEach(pulsar => {
        pulsar.amplitude = Math.max(0, pulsar.amplitude);
      });
    }
  });
}