/**
 * Centralized logging utility for the quantum communication system
 */

/**
 * Log a message with timestamp and type formatting
 * @param {string} message - The message to log
 * @param {string} type - The type of log ('info', 'error', 'success', 'debug', 'system')
 */
export function log(message, type = 'info') {
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
  
  if (type === 'error') {
    console.error(`[${timestamp}] ERROR: ${message}`);
  } else if (type === 'success') {
    console.log(`[${timestamp}] SUCCESS: ${message}`);
  } else if (type === 'debug') {
    // Only log debug messages if verbose mode would be enabled
    console.log(`[${timestamp}] DEBUG: ${message}`);
  } else if (type === 'system') {
    console.log(`[${timestamp}] ${message}`);
  } else {
    console.log(`[${timestamp}] INFO: ${message}`);
  }
}