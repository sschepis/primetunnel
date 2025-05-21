import readline from 'readline';
import chalk from 'chalk';
import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { EnhancedCommunicationAgent, CONFIG as defaultConfig, log as simLog } from '../index.js';
import {
    PAYLOAD_TYPES,
    stringToBinary,
    createHeader,
    getChatPrimes,
    HEADER_BIT_LENGTHS
  } from './messaging.js'; // Assuming messaging.js is in the same directory
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
});

// --- Configuration for the IPC Chat ---
const CHAT_CONFIG_IPC = {
  ...defaultConfig,
  primes: getChatPrimes(), // Use 32 primes
  epsilon: 0.4,
  threshold: 0.25, // Receiver will use this, sender doesn't directly use it for sending
  cycles: 1,
  verbose: false, // Keep simulation logs quiet for chat
  resonanceStrength: 0.05,
  messageForce: 10,
  correctionStrength: 0.8,
  enablePhaseCorrection: true,
  // message property will be set per chunk by this script
};

const SENDER_NAME = "Sender (IPC)";
const SENDER_COLOR = chalk.blue;
const SYSTEM_COLOR = chalk.yellow;
const ERROR_COLOR = chalk.red;

let senderAgent;
let receiverProcess;
let nextMessageId = 0; // Sender manages its own message IDs

function log(message, type = 'info') {
  if (type === 'system') console.log(SYSTEM_COLOR(message));
  else if (type === 'error') console.log(ERROR_COLOR(message));
  else if (type === 'sender') console.log(SENDER_COLOR(`${SENDER_NAME}: ${message}`));
  else console.log(message);
}

async function initializeSender() {
  log('--- PrimeTunnel IPC Sender ---', 'system');
  log('Initializing Sender Agent...', 'system');

  senderAgent = new EnhancedCommunicationAgent(CHAT_CONFIG_IPC.primes, CHAT_CONFIG_IPC);
  log('Sender Agent initialized.', 'system');

  log('Forking Receiver Process (receiver_ipc.js)...', 'system');
  const receiverScriptPath = path.join(__dirname, 'receiver_ipc.js');
  log(`Receiver script path: ${receiverScriptPath}`, 'system');
  receiverProcess = fork(receiverScriptPath, [], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

  receiverProcess.on('message', (msg) => {
    if (msg.type === 'log_receiver') {
        // Color receiver messages differently if needed
        console.log(chalk.green(`Receiver: ${msg.message}`));
    } else if (msg.type === 'ready') {
        log('Receiver process is ready. You can start sending messages.', 'system');
        promptForMessage();
    } else if (msg.type === 'error_receiver') {
        log(`Receiver Error: ${msg.message}`, 'error');
    }
  });

  receiverProcess.stdout.on('data', (data) => {
    process.stdout.write(chalk.gray(`[Receiver STDOUT]: ${data}`));
  });
  receiverProcess.stderr.on('data', (data) => {
    process.stderr.write(chalk.red(`[Receiver STDERR]: ${data}`));
  });

  receiverProcess.on('exit', (code) => {
    log(`Receiver process exited with code ${code}`, code === 0 ? 'system' : 'error');
    rl.close();
    process.exit(code || 0);
  });

  receiverProcess.on('error', (err) => {
    log(`Failed to start receiver process: ${err.message}`, 'error');
    process.exit(1);
  });
}

async function sendFullMessageIPC(messageText) {
  if (!messageText.trim()) return;
  log(messageText, 'sender');

  const messageId = nextMessageId;
  nextMessageId = (nextMessageId + 1) % (2 ** HEADER_BIT_LENGTHS.messageId);

  const fullBinaryMessage = stringToBinary(messageText);
  const totalHeaderBits = Object.values(HEADER_BIT_LENGTHS).reduce((sum, len) => sum + len, 0);
  const payloadCapacityBits = CHAT_CONFIG_IPC.primes.length - totalHeaderBits;

  if (payloadCapacityBits <= 0) {
    log(`Error: No space for payload. Primes: ${CHAT_CONFIG_IPC.primes.length}, Header: ${totalHeaderBits} bits.`, 'error');
    return;
  }

  const totalChunks = Math.ceil(fullBinaryMessage.length / payloadCapacityBits);

  if (totalChunks >= (2 ** HEADER_BIT_LENGTHS.chunkSequenceNumber) || totalChunks >= (2 ** HEADER_BIT_LENGTHS.totalChunks)) {
    log(`Error: Message too large for chunking protocol. Max chunks: ${2**HEADER_BIT_LENGTHS.chunkSequenceNumber}. Required: ${totalChunks}`, 'error');
    return;
  }

  log(`Sending messageId ${messageId} ("${messageText.slice(0,20)}...") in ${totalChunks} chunks.`, 'system');

  for (let i = 0; i < totalChunks; i++) {
    const isLastChunk = (i === totalChunks - 1);
    const payloadData = fullBinaryMessage.substring(i * payloadCapacityBits, (i + 1) * payloadCapacityBits);
    const payload = payloadData.padEnd(payloadCapacityBits, '0'); // Pad last chunk's payload

    let header;
    try {
        header = createHeader(messageId, i, totalChunks, isLastChunk, PAYLOAD_TYPES.CHAT_MESSAGE);
    } catch (e) {
        log(`Error creating header: ${e.message}`, 'error');
        return;
    }
    
    const chunkToSendBinary = header + payload;

    if (chunkToSendBinary.length !== CHAT_CONFIG_IPC.primes.length) {
      log(`Error: Chunk length ${chunkToSendBinary.length} does not match prime count ${CHAT_CONFIG_IPC.primes.length}.`, 'error');
      continue;
    }

    // "Transmit" the chunk by updating the sender's state
    senderAgent.enhancedSendMessage(
      chunkToSendBinary,
      CHAT_CONFIG_IPC.epsilon,
      CHAT_CONFIG_IPC.useAmplitudeModulation ? CHAT_CONFIG_IPC.amplitudeEpsilon : 0 // Assuming amplitudeEpsilon exists or is 0
    );
    log(`Sent chunk ${i+1}/${totalChunks} (non-locally). Binary: ${chunkToSendBinary.substring(0,30)}...`, 'system');

    // Notify receiver to attempt a read for this chunk
    if (receiverProcess && receiverProcess.connected) {
        receiverProcess.send({ type: 'sync_chunk', chunkNumber: i, totalChunks: totalChunks });
    } else {
        log('Receiver process not connected. Cannot send sync signal.', 'error');
        return; // Stop if receiver is gone
    }
    
    // Small delay to simulate time between chunks and allow receiver to process
    // This is a guess; real non-local comms wouldn't need this, but helps for simulation.
    await new Promise(resolve => setTimeout(resolve, 50)); 
  }
  log(`All ${totalChunks} chunks for messageId ${messageId} "sent" non-locally.`, 'system');
  senderAgent.state = senderAgent.referenceState.clone(); // Reset sender state after full message
}

function promptForMessage() {
    rl.setPrompt(chalk.bold(`${SENDER_NAME} > `));
    rl.prompt();
}

(async () => {
  await initializeSender();
  // Initial prompt will be called once receiver is ready

  rl.on('line', async (line) => {
    const input = line.trim();
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === '/quit') {
      log('Exiting sender.', 'system');
      if (receiverProcess && receiverProcess.connected) {
        receiverProcess.send({ type: 'exit' }); // Tell receiver to exit
        receiverProcess.disconnect();
      }
      rl.close();
      process.exit(0);
    } else {
      await sendFullMessageIPC(input);
    }
    promptForMessage();
  }).on('close', () => {
    log('Sender chat closed.', 'system');
    if (receiverProcess && receiverProcess.connected) {
        receiverProcess.send({ type: 'exit' });
        receiverProcess.disconnect();
    }
    process.exit(0);
  });
})();