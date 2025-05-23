import {
  initializeAgent,
  sendMessage,
  evolveAgent,
  measureAgent,
  decodeMessage,
  getConfig,
  updateConfig,
  resetAgent,
} from '../nonlocal-comms.js';

// Mock the internal dependencies if needed, for now, let's assume they work
// For example, if QuantumCommunicationAgent had complex side effects, you'd mock it.
// For this initial test, we'll rely on the actual implementation of QuantumCommunicationAgent
// but ensure the public interface functions as expected.

describe('Nonlocal Communication Interface', () => {
  beforeEach(() => {
    // Reset agent instance before each test to ensure isolation
    resetAgent();
  });

  test('initializeAgent should initialize the agent instance', () => {
    initializeAgent();
    // A simple way to check if it's initialized is to try a function that requires initialization
    // and expect it not to throw an error or return null due to uninitialized agent.
    expect(() => sendMessage('1010')).not.toThrow();
    expect(getConfig()).toBeDefined(); // getConfig should return something if initialized
  });

  test('sendMessage should log a message and return true if agent is initialized', () => {
    initializeAgent();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const result = sendMessage('1010');
    expect(result).toBe(true);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Message "1010" sent.'));
    consoleSpy.mockRestore();
  });

  test('sendMessage should log an error and return false if agent is not initialized', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const result = sendMessage('1010');
    expect(result).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Agent not initialized.'));
    consoleSpy.mockRestore();
  });

  test('evolveAgent should log a message and return true if agent is initialized', () => {
    initializeAgent();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const result = evolveAgent(0.01);
    expect(result).toBe(true);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Agent evolved for timestep 0.01.'));
    consoleSpy.mockRestore();
  });

  test('evolveAgent should log an error and return false if agent is not initialized', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const result = evolveAgent(0.01);
    expect(result).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Agent not initialized.'));
    consoleSpy.mockRestore();
  });

  test('measureAgent should return metrics if agent is initialized', () => {
    initializeAgent();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const metrics = measureAgent();
    expect(metrics).toBeDefined();
    expect(metrics).toHaveProperty('resonanceStrength');
    expect(metrics).toHaveProperty('entropy');
    consoleSpy.mockRestore();
  });

  test('measureAgent should return null and log error if agent is not initialized', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const metrics = measureAgent();
    expect(metrics).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Agent not initialized.'));
    consoleSpy.mockRestore();
  });

  test('decodeMessage should return a string if agent is initialized', () => {
    initializeAgent();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const decoded = decodeMessage();
    expect(typeof decoded).toBe('string');
    consoleSpy.mockRestore();
  });

  test('decodeMessage should return null and log error if agent is not initialized', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const decoded = decodeMessage();
    expect(decoded).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Agent not initialized.'));
    consoleSpy.mockRestore();
  });

  test('getConfig should return the current configuration', () => {
    initializeAgent(); // Initialize to ensure CONFIG is loaded
    const initialConfig = getConfig();
    expect(initialConfig).toBeDefined();
    expect(initialConfig).toHaveProperty('primes');
    expect(initialConfig).toHaveProperty('message');
  });

  test('updateConfig should update the configuration', () => {
    initializeAgent(); // Initialize to ensure CONFIG is loaded
    const newConfig = { message: '1111', epsilon: 0.6 };
    updateConfig(newConfig);
    const updatedConfig = getConfig();
    expect(updatedConfig.message).toBe('1111');
    expect(updatedConfig.epsilon).toBe(0.6);
  });

  test('resetAgent should reset the agent instance', () => {
    initializeAgent();
    expect(() => sendMessage('1010')).not.toThrow(); // Should work before reset
    resetAgent();
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const result = sendMessage('1010'); // Should fail after reset
    expect(result).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Agent not initialized.'));
    consoleSpy.mockRestore();
  });
});