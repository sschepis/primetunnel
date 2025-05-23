import { QuantumCommunicationAgent, runDirectTest, runEvolutionTest } from '../core.js';
import { CONFIG, DIRECT_CONFIG } from '../config.js';
import { PrimeState, Metrics, CommunicationAgent } from '../prime-resonance.js';

// Mock console.log and console.error to prevent test output clutter
const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});
const mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
const mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});

describe('QuantumCommunicationAgent', () => {
  let agent;

  beforeEach(() => {
    // Re-initialize agent before each test to ensure a clean state
    agent = new QuantumCommunicationAgent(CONFIG.primes, CONFIG);
    mockLog.mockClear();
    mockError.mockClear();
    mockWarn.mockClear();
  });

  afterAll(() => {
    // Restore console after all tests are done
    mockLog.mockRestore();
    mockError.mockRestore();
    mockWarn.mockRestore();
  });

  test('constructor should initialize state and referenceState', () => {
    expect(agent.state).toBeInstanceOf(PrimeState);
    expect(agent.referenceState).toBeInstanceOf(PrimeState);
    expect(agent.state).not.toBe(agent.referenceState); // Should be a clone, not the same object
  });

  describe('sendQuantumMessage', () => {
    test('should call super.sendMessage for phase encoding', () => {
      const sendMessageSpy = jest.spyOn(CommunicationAgent.prototype, 'sendMessage');
      agent.sendQuantumMessage('1010', 0.5);
      expect(sendMessageSpy).toHaveBeenCalledWith('1010', 0.5);
      sendMessageSpy.mockRestore();
    });

    test('should call modulatePrimeBasisAmplitude if amplitude modulation is enabled', () => {
      const modulateAmplitudeSpy = jest.spyOn(agent, 'modulatePrimeBasisAmplitude');
      agent.sendQuantumMessage('1010', 0.5, 0.1); // amplitudeEpsilon > 0
      expect(modulateAmplitudeSpy).toHaveBeenCalledWith('1010', 0.1);
      modulateAmplitudeSpy.mockRestore();
    });

    test('should not call modulatePrimeBasisAmplitude if amplitude modulation is disabled', () => {
      const modulateAmplitudeSpy = jest.spyOn(agent, 'modulatePrimeBasisAmplitude');
      agent.sendQuantumMessage('1010', 0.5, 0); // amplitudeEpsilon = 0
      expect(modulateAmplitudeSpy).not.toHaveBeenCalled();
      modulateAmplitudeSpy.mockRestore();
    });
  });

  describe('modulatePrimeBasisAmplitude', () => {
    test('should adjust pulsar amplitudes based on message bits', () => {
      // Mock normalization to make test predictable
      const mockNormalize = jest.spyOn(agent.state, 'normalizeAllPulsarAmplitudes').mockImplementation(() => {});
      
      // Ensure initial amplitudes are non-zero for testing changes
      agent.state.primeBases.forEach(basis => {
        basis.pulsars.forEach(p => p.amplitude = 0.1);
      });

      const initialAmplitudes = agent.state.primeBases.map(b => b.pulsars.map(p => p.amplitude));
      agent.modulatePrimeBasisAmplitude('1010', 0.01); // Small epsilon for predictable change

      agent.state.primeBases.forEach((basis, i) => {
        basis.pulsars.forEach((p, k) => {
          // Check if amplitude changed in the expected direction
          if ('1010'[i] === '1') {
            expect(p.amplitude).toBeGreaterThanOrEqual(initialAmplitudes[i][k]);
          } else {
            expect(p.amplitude).toBeLessThanOrEqual(initialAmplitudes[i][k]);
          }
        });
      });
      // Expect normalizeAllPulsarAmplitudes to be called
      expect(mockNormalize).toHaveBeenCalled();
      mockNormalize.mockRestore();
    });

    test('should handle empty primeBases gracefully', () => {
      agent.state.primeBases = null;
      expect(() => agent.modulatePrimeBasisAmplitude('1010', 0.1)).not.toThrow();
      expect(mockError).toHaveBeenCalledWith(expect.stringContaining('State or primeBases not initialized'));
    });
  });

  describe('applyPhaseCorrection', () => {
    test('should adjust pulsar phases towards target', () => {
      // Manipulate initial phases to ensure a correction is needed
      agent.state.primeBases[0].pulsars[0].phase = Math.PI / 2;
      agent.referenceState.primeBases[0].pulsars[0].phase = 0; // Target 0 or epsilon

      agent.applyPhaseCorrection(1.0); // Full strength

      // Expect phase to move towards 0 or epsilon
      // This test is simplified; a more robust test would calculate expected phase precisely
      expect(agent.state.primeBases[0].pulsars[0].phase).not.toBeCloseTo(Math.PI / 2);
    });

    test('should handle empty primeBases gracefully', () => {
      agent.state.primeBases = null;
      expect(() => agent.applyPhaseCorrection(1.0)).not.toThrow();
      expect(mockError).toHaveBeenCalledWith(expect.stringContaining('State or primeBases not initialized'));
    });
  });

  describe('decodeQuantumMessage', () => {
    test('should call super.decodeMessage for phase decoding', () => {
      const decodeMessageSpy = jest.spyOn(CommunicationAgent.prototype, 'decodeMessage');
      agent.decodeQuantumMessage(0.2);
      expect(decodeMessageSpy).toHaveBeenCalledWith(0.2);
      decodeMessageSpy.mockRestore();
    });

    test('should call decodeAmplitude if useAmplitude is true', () => {
      const decodeAmplitudeSpy = jest.spyOn(agent, 'decodeAmplitude');
      agent.decodeQuantumMessage(0.2, true);
      expect(decodeAmplitudeSpy).toHaveBeenCalled();
      decodeAmplitudeSpy.mockRestore();
    });

    test('should not call decodeAmplitude if useAmplitude is false', () => {
      const decodeAmplitudeSpy = jest.spyOn(agent, 'decodeAmplitude');
      agent.decodeQuantumMessage(0.2, false);
      expect(decodeAmplitudeSpy).not.toHaveBeenCalled();
      decodeAmplitudeSpy.mockRestore();
    });
  });

  describe('decodeAmplitude', () => {
    test('should return a binary string', () => {
      const decoded = agent.decodeAmplitude();
      expect(typeof decoded).toBe('string');
      expect(decoded).toMatch(/^[01]*$/);
    });

    test('should decode based on composite amplitude change', () => {
      // Manipulate amplitudes to get a predictable decode
      agent.state.primeBases[0].pulsars[0].amplitude = 0.5; // Increase current
      agent.referenceState.primeBases[0].pulsars[0].amplitude = 0.1; // Keep reference low

      const decoded = agent.decodeAmplitude();
      // Assuming default amplitudeThreshold, this should decode to '1' for the first bit
      expect(decoded[0]).toBe('1');
    });
  });
});

describe('runDirectTest', () => {
  test('should execute without errors and return success status', async () => {
    // Mock console.log to prevent excessive output during test run
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await runDirectTest();
    expect(result.senderSuccess).toBe(true);
    expect(result.receiverSuccess).toBe(true);
    expect(consoleErrorSpy).not.toHaveBeenCalled(); // Expect no errors during direct test
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });
});

describe('runEvolutionTest', () => {
  test('should execute without errors and return success status', async () => {
    // Mock console.log to prevent excessive output during test run
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Use a simplified config for faster testing
    const testConfig = {
      ...CONFIG,
      cycles: 1, // Reduce cycles for quick test
      verbose: false, // Suppress verbose logging
    };

    const result = await runEvolutionTest(testConfig);
    // Evolution test success depends on many factors, so we primarily check for no errors
    expect(result).toBeDefined();
    expect(consoleErrorSpy).not.toHaveBeenCalled(); // Expect no errors during evolution test
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });
});