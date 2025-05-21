import chalk from 'chalk';
import { EnhancedCommunicationAgent, CONFIG as defaultConfig, log as simLog } from '../index.js';
import {
    getChatPrimes,
    handleReceivedChunk, // Key function for processing decoded data
    binaryToString,      // To display the final message
    PAYLOAD_TYPES        // To understand the message type
} from './messaging.js'; // Assuming messaging.js is in the same directory

// --- Configuration for the IPC Chat (must match sender's) ---
const CHAT_CONFIG_IPC = {
  ...defaultConfig,
  primes: getChatPrimes(),
  epsilon: 0.4, // Sender uses this for sending
  threshold: 0.25, // Receiver uses this for decoding
  cycles: 1,
  verbose: false,
  resonanceStrength: 0.05,
  messageForce: 10,
  correctionStrength: 0.8,
  enablePhaseCorrection: true,
  // message property is not set here, it's derived from decoding
};

const RECEIVER_NAME = "Receiver (IPC)";
const RECEIVER_COLOR = chalk.green;
const SYSTEM_COLOR = chalk.yellow;
const ERROR_COLOR = chalk.red;

let receiverAgent;
const reassemblyBuffer = {}; // Receiver manages its own reassembly buffer

// Custom log function for receiver, sends messages to parent (sender)
function logToParent(message, type = 'log_receiver') {
  if (process.send) {
    process.send({ type: type, message: `[${RECEIVER_NAME}] ${message}` });
  } else {
    // Fallback if not running as a child process (e.g., direct execution for testing)
    const color = type === 'error_receiver' ? ERROR_COLOR : RECEIVER_COLOR;
    console.log(color(`[${RECEIVER_NAME}] ${message}`));
  }
}

async function initializeReceiver() {
  logToParent('Initializing Receiver Agent...', 'system_receiver_log'); // Use a distinct type if needed
  receiverAgent = new EnhancedCommunicationAgent(CHAT_CONFIG_IPC.primes, CHAT_CONFIG_IPC);
  logToParent('Receiver Agent initialized.', 'system_receiver_log');
  
  // Notify sender that receiver is ready
  if (process.send) {
    process.send({ type: 'ready' });
  }
}

// This function will be called when the sender signals a "transmission"
async function attemptReceiveAndProcess() {
  // Attempt to decode from the "non-local medium"
  // The enhancedDecodeMessage method is expected to pick up the state change
  // caused by the sender, if the non-local communication works.
  const decodedChunkBinary = receiverAgent.enhancedDecodeMessage(
    CHAT_CONFIG_IPC.threshold,
    CHAT_CONFIG_IPC.useAmplitudeModulation // Assuming this config is available
  );

  if (!decodedChunkBinary || decodedChunkBinary.length !== CHAT_CONFIG_IPC.primes.length) {
    logToParent(`Failed to decode a valid chunk or chunk length mismatch. Decoded length: ${decodedChunkBinary?.length}, Expected: ${CHAT_CONFIG_IPC.primes.length}`, 'error_receiver');
    // Even on failure, we might need to reset receiver state to prepare for next attempt
    receiverAgent.state = receiverAgent.referenceState.clone();
    return null;
  }
  
  logToParent(`Successfully decoded a binary chunk (length ${decodedChunkBinary.length}). Attempting reassembly...`, 'log_receiver');
  // logToParent(`Decoded binary: ${decodedChunkBinary.substring(0,60)}...`, 'log_receiver');


  // Use handleReceivedChunk from messaging.js to process the decoded chunk
  // It manages reassembly and returns the full message if complete.
  // We pass a modified chatConfig because handleReceivedChunk expects `message` to be the raw chunk.
  const reassembled = handleReceivedChunk({
    binaryChunkToDecode: decodedChunkBinary, // This is what the receiver *thinks* it received
    receiverAgent: receiverAgent, // Pass the agent for its internal state if needed by handleReceivedChunk (original didn't, but good practice)
    chatConfig: { ...CHAT_CONFIG_IPC, message: decodedChunkBinary }, // Pass the decoded chunk as 'message'
    logFn: (msg, type) => logToParent(`[Reassembly] ${msg}`, type === 'error' ? 'error_receiver' : 'log_receiver'),
    _reassemblyBuffer: reassemblyBuffer // Pass local reassembly buffer
  });
  
  // Reset receiver state after each decode attempt to be ready for the next independent chunk
  // This is crucial because each chunk is a separate "non-local" event.
  receiverAgent.state = receiverAgent.referenceState.clone();


  if (reassembled) {
    logToParent(`Message reassembled! Type: ${reassembled.payloadType}`, 'log_receiver');
    if (reassembled.payloadType === PAYLOAD_TYPES.CHAT_MESSAGE) {
      const receivedText = binaryToString(reassembled.fullBinaryMessage);
      logToParent(`CHAT MESSAGE: ${receivedText}`, 'log_receiver_chat'); // Use a distinct type for chat messages
    } else {
      logToParent(`Received unhandled message type: ${reassembled.payloadType}`, 'log_receiver');
    }
    return reassembled;
  }
  return null;
}

(async () => {
  await initializeReceiver();

  process.on('message', async (msg) => {
    if (msg.type === 'sync_chunk') {
      logToParent(`Received sync signal for chunk ${msg.chunkNumber + 1}/${msg.totalChunks}. Attempting to decode...`, 'system_receiver_log');
      await attemptReceiveAndProcess();
    } else if (msg.type === 'exit') {
      logToParent('Received exit signal from sender. Exiting.', 'system_receiver_log');
      process.exit(0);
    }
  });

  // Keep alive until parent signals exit
  // process.stdin.resume(); // Not strictly necessary if parent manages lifecycle
})();