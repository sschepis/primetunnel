import readline from 'readline';
import chalk from 'chalk';
import { EnhancedCommunicationAgent, CONFIG as defaultConfig, log as simLog } from '../index.js';
import { 
    PAYLOAD_TYPES, 
    stringToBinary, 
    binaryToString, 
    getChatPrimes,
    sendMessage as sendChunkedMessage,
    handleReceivedChunk
} from './messaging.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- Configuration for the Chat ---
const CHAT_CONFIG = {
  ...defaultConfig, // Spread the default config
  primes: getChatPrimes(), // Use 32 primes from messaging.js
  epsilon: 0.4,
  threshold: 0.25,
  cycles: 1, // Fewer cycles for faster chat simulation, direct copy is faster
  verbose: false, // Keep simulation logs quiet for chat
  // message property will be set per chunk by messaging.js
  // Ensure other relevant properties from defaultConfig are suitable or overridden
  resonanceStrength: 0.05, 
  messageForce: 10,
  correctionStrength: 0.8,
  enablePhaseCorrection: true,
};

const USER_A_NAME = "UserA";
const USER_B_NAME = "UserB";
const USER_A_COLOR = chalk.blue;
const USER_B_COLOR = chalk.green;
const SYSTEM_COLOR = chalk.yellow;
const ERROR_COLOR = chalk.red;

let chatHistory = [];
const MAX_HISTORY = 15; // Max messages to display

let agentA, agentB;
let currentUser, currentAgent, otherAgent, otherUserName;

// Custom logger for chat, distinct from simulation's log
function chatLog(message, type = 'info', user = null) {
  let coloredMessage = message;
  if (type === 'system') coloredMessage = SYSTEM_COLOR(message);
  else if (type === 'error') coloredMessage = ERROR_COLOR(message);
  else if (user === USER_A_NAME) coloredMessage = USER_A_COLOR(`${user}: ${message}`);
  else if (user === USER_B_NAME) coloredMessage = USER_B_COLOR(`${user}: ${message}`);
  
  const historyEntry = { raw: message, colored: coloredMessage, user, type };
  chatHistory.push(historyEntry);
  if (chatHistory.length > MAX_HISTORY) {
    chatHistory.shift();
  }
  redrawChat();
}

function redrawChat() {
  console.clear(); // Clear console
  chatHistory.forEach(entry => console.log(entry.colored));
  rl.prompt(true); // Redraw prompt
}

async function handleOutgoingMessage(messageText) {
  if (!messageText.trim()) return;

  chatLog(messageText, 'chat', currentUser); // Log outgoing message immediately

  // The sendMessage function from messaging.js now handles chunking
  // It will call handleReceivedChunk internally for each chunk for this example's direct simulation
  const reassembledResultBySender = await sendChunkedMessage({
    fullMessageString: messageText,
    messageType: PAYLOAD_TYPES.CHAT_MESSAGE,
    senderAgent: currentAgent,
    receiverAgent: otherAgent,
    chatConfig: CHAT_CONFIG,
    logFn: simLog // Use the simulation's log for messaging layer's debug/error
  });

  // In this simplified direct simulation, if reassembledResultBySender is not null,
  // it means the receiver (otherAgent) has already processed it via handleReceivedChunk
  // called within sendChunkedMessage. We then need to process it for display.
  if (reassembledResultBySender) {
    processReassembledMessage(reassembledResultBySender, otherUserName);
  }
  // No explicit call to otherAgent.handleReceivedChunk here as it's done inside sendChunkedMessage
}

function processReassembledMessage(reassembled, recipientName) {
    if (reassembled && reassembled.payloadType === PAYLOAD_TYPES.CHAT_MESSAGE) {
        const receivedText = binaryToString(reassembled.fullBinaryMessage);
        chatLog(receivedText, 'chat', recipientName === USER_A_NAME ? USER_A_NAME : USER_B_NAME); // Log as the original sender
    } else if (reassembled && reassembled.payloadType === PAYLOAD_TYPES.ANNOUNCE_CLIENT) {
        const announcedUser = binaryToString(reassembled.fullBinaryMessage);
        chatLog(`${announcedUser} has connected.`, 'system');
    } else if (reassembled) {
        chatLog(`Received unhandled message type: ${reassembled.payloadType}`, 'system');
    }
}


function switchUser() {
  [currentUser, otherUserName] = [otherUserName, currentUser];
  [currentAgent, otherAgent] = [otherAgent, currentAgent];
  chatLog(`Switched to ${currentUser}. Type your message.`, 'system');
  rl.setPrompt(chalk.bold(`${currentUser} > `));
}

async function initializeChat() {
  simLog('[CHAT_MAIN] Initializing PrimeTunnel Chat V2...', 'system');
  
  agentA = new EnhancedCommunicationAgent(CHAT_CONFIG.primes, CHAT_CONFIG);
  agentB = new EnhancedCommunicationAgent(CHAT_CONFIG.primes, CHAT_CONFIG);
  simLog('[CHAT_MAIN] Agents initialized.', 'info');

  currentUser = USER_A_NAME;
  currentAgent = agentA;
  otherAgent = agentB;
  otherUserName = USER_B_NAME;

  chatLog("--- PrimeTunnel Chat V2 ---", 'system');
  chatLog("Type '/switch' to change user.", 'system');
  chatLog("Type '/clear' to clear history.", 'system');
  chatLog("Type 'exit' or '/quit' to end.", 'system');
  
  // Client Announcements
  chatLog("Announcing clients...", 'system');
  const announcementA = await sendChunkedMessage({
    fullMessageString: USER_A_NAME,
    messageType: PAYLOAD_TYPES.ANNOUNCE_CLIENT,
    senderAgent: agentA,
    receiverAgent: agentB, // B receives A's announcement
    chatConfig: CHAT_CONFIG,
    logFn: simLog
  });
   if (announcementA) processReassembledMessage(announcementA, USER_B_NAME);


  const announcementB = await sendChunkedMessage({
    fullMessageString: USER_B_NAME,
    messageType: PAYLOAD_TYPES.ANNOUNCE_CLIENT,
    senderAgent: agentB,
    receiverAgent: agentA, // A receives B's announcement
    chatConfig: CHAT_CONFIG,
    logFn: simLog
  });
  if (announcementB) processReassembledMessage(announcementB, USER_A_NAME);


  rl.setPrompt(chalk.bold(`${currentUser} > `));
  rl.prompt();

  rl.on('line', async (line) => {
    const input = line.trim();
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === '/quit') {
      chatLog('Exiting chat.', 'system');
      rl.close();
      process.exit(0);
    } else if (input.toLowerCase() === '/switch') {
      switchUser();
    } else if (input.toLowerCase() === '/clear') {
      chatHistory = [];
      redrawChat();
      chatLog('Chat history cleared.', 'system');
    } else {
      await handleOutgoingMessage(input);
    }
    rl.prompt();
  }).on('close', () => {
    chatLog('Chat closed. Goodbye!', 'system');
    process.exit(0);
  });
}

initializeChat();