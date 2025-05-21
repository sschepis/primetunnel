// messaging.js - Handles message chunking, reassembly, and protocol for PrimeTunnel chat.
import { pulsarFrequencies, organizePulsarsByPrime } from '../pulsar-frequencies.js';

// --- Protocol Constants ---
export const PAYLOAD_TYPES = {
  CHAT_MESSAGE: '00',
  ANNOUNCE_CLIENT: '01',
  ACK: '10', // Deferred
  RESERVED: '11'
};

export const HEADER_BIT_LENGTHS = {
  messageId: 4,       // Unique ID for the entire message (allows 16 concurrent messages)
  chunkSequenceNumber: 4, // Order of this chunk (allows 16 chunks per message)
  totalChunks: 4,     // Total number of chunks for this message
  isLastChunk: 1,     // Boolean flag (0 for not last, 1 for last)
  payloadType: 2,     // CHAT_MESSAGE, ANNOUNCE_CLIENT, ACK
};
// Total header bits: 4+4+4+1+2 = 15 bits

// --- Utility Functions ---

/**
 * Converts a string to its full binary representation (UTF-8 character codes).
 * Each character becomes an 8-bit binary string.
 * @param {string} str The input string.
 * @returns {string} The binary string representation.
 */
export function stringToBinary(str) {
  return str.split('').map(char => {
    const binary = char.charCodeAt(0).toString(2);
    return '00000000'.slice(binary.length) + binary; // Pad to 8 bits
  }).join('');
}

/**
 * Converts a binary string (composed of 8-bit segments) back to a text string.
 * @param {string} binStr The binary string.
 * @returns {string} The decoded text string.
 */
export function binaryToString(binStr) {
  let str = '';
  if (!binStr) {
    console.error('[Messaging] Empty binary string for conversion to text.');
    return '[Error: Empty Data]';
  }
  
  const effectiveLength = Math.floor(binStr.length / 8) * 8; // Truncate to nearest multiple of 8
  if (binStr.length !== effectiveLength) {
    console.warn(`[Messaging] Binary string length ${binStr.length} not a multiple of 8. Truncating to ${effectiveLength} bits for string conversion.`);
  }

  if (effectiveLength === 0) {
    return '[Error: No Valid Data]';
  }

  for (let i = 0; i < effectiveLength; i += 8) {
    const byte = binStr.slice(i, i + 8);
    str += String.fromCharCode(parseInt(byte, 2));
  }
  return str;
}

/**
 * Selects prime numbers for the chat that have associated pulsar data.
 * Aims to return 32 such primes.
 * @returns {number[]} An array of up to 32 prime numbers.
 */
export function getChatPrimes() {
  const organizedPulsars = organizePulsarsByPrime(pulsarFrequencies);
  const primesWithData = Object.keys(organizedPulsars)
                               .map(primeStr => parseInt(primeStr, 10))
                               .filter(primeNum => !isNaN(primeNum) && primeNum > 1); // Ensure they are valid numbers > 1

  // Sort for consistency, though not strictly necessary for functionality
  primesWithData.sort((a, b) => a - b);

  const desiredPrimeCount = 32;
  if (primesWithData.length === 0) {
    console.error("[Messaging] No primes with actual pulsar data found! Falling back to a default list.");
    // Fallback to a default list if no primes with data are found
    return [
      1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069,
      1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163,
      1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223
    ];
  }
  
  if (primesWithData.length < desiredPrimeCount) {
    console.warn(`[Messaging] Found only ${primesWithData.length} primes with pulsar data. Using all of them. Chat capacity might be affected if less than ${desiredPrimeCount}.`);
    return primesWithData;
  }

  // If more than 32, select a subset. For simplicity, take the first 32.
  // A more sophisticated selection might involve other criteria (e.g., number of pulsars per prime).
  return primesWithData.slice(0, desiredPrimeCount);
}

// --- Core Messaging Logic ---

const reassemblyBuffer = {};
let nextMessageId = 0;

/**
 * Creates a binary header for a message chunk.
 */
export function createHeader(messageId, chunkSequenceNumber, totalChunks, isLastChunk, payloadType) {
  const idBin = messageId.toString(2).padStart(HEADER_BIT_LENGTHS.messageId, '0');
  const seqBin = chunkSequenceNumber.toString(2).padStart(HEADER_BIT_LENGTHS.chunkSequenceNumber, '0');
  const totalBin = totalChunks.toString(2).padStart(HEADER_BIT_LENGTHS.totalChunks, '0');
  const lastBin = isLastChunk ? '1' : '0';

  if (idBin.length > HEADER_BIT_LENGTHS.messageId ||
      seqBin.length > HEADER_BIT_LENGTHS.chunkSequenceNumber ||
      totalBin.length > HEADER_BIT_LENGTHS.totalChunks) {
    throw new Error("Header field overflow");
  }
  return idBin + seqBin + totalBin + lastBin + payloadType;
}

/**
 * Sends a full message by breaking it into chunks and transmitting them.
 */
export async function sendMessage({
  fullMessageString,
  messageType,
  senderAgent,
  receiverAgent,
  chatConfig,
  logFn = console.log
}) {
  let reassembledMessageDuringSend = null;
  const messageId = nextMessageId;
  nextMessageId = (nextMessageId + 1) % (2 ** HEADER_BIT_LENGTHS.messageId);

  const fullBinaryMessage = stringToBinary(fullMessageString);
  const totalHeaderBits = Object.values(HEADER_BIT_LENGTHS).reduce((sum, len) => sum + len, 0);
  const payloadCapacityBits = chatConfig.primes.length - totalHeaderBits;

  if (payloadCapacityBits <= 0) {
    logFn(`[Messaging] Error: No space for payload. Primes: ${chatConfig.primes.length}, Header: ${totalHeaderBits} bits.`, 'error');
    return null;
  }

  const totalChunks = Math.ceil(fullBinaryMessage.length / payloadCapacityBits);

  if (totalChunks >= (2 ** HEADER_BIT_LENGTHS.chunkSequenceNumber) || totalChunks >= (2 ** HEADER_BIT_LENGTHS.totalChunks)) {
    logFn(`[Messaging] Error: Message too large for chunking protocol. Max chunks: ${2**HEADER_BIT_LENGTHS.chunkSequenceNumber}. Required: ${totalChunks}`, 'error');
    return null;
  }

  logFn(`[Messaging] Sending messageId ${messageId} ("${fullMessageString.slice(0,20)}...") in ${totalChunks} chunks. Payload capacity: ${payloadCapacityBits} bits.`, 'debug');

  for (let i = 0; i < totalChunks; i++) {
    const isLastChunk = (i === totalChunks - 1);
    const payloadData = fullBinaryMessage.substring(i * payloadCapacityBits, (i + 1) * payloadCapacityBits);
    const payload = payloadData.padEnd(payloadCapacityBits, '0'); // Pad last chunk's payload if needed
    
    let header;
    try {
        header = createHeader(messageId, i, totalChunks, isLastChunk, messageType);
    } catch (e) {
        logFn(`[Messaging] Error creating header: ${e.message}`, 'error');
        return null; 
    }
    
    const chunkToSendBinary = header + payload;

    if (chunkToSendBinary.length !== chatConfig.primes.length) {
      logFn(`[Messaging] Error: Chunk length ${chunkToSendBinary.length} does not match prime count ${chatConfig.primes.length}. Header: ${header.length}, Payload: ${payload.length}`, 'error');
      continue; 
    }

    const currentChunkConfig = { ...chatConfig, message: chunkToSendBinary };
    
    logFn(`[Messaging] Sending chunk ${i+1}/${totalChunks} for messageId ${messageId}. Binary: ${chunkToSendBinary.substring(0,60)}...`, 'debug');

    senderAgent.enhancedSendMessage(
      currentChunkConfig.message,
      currentChunkConfig.epsilon,
      currentChunkConfig.useAmplitudeModulation ? currentChunkConfig.amplitudeEpsilon : 0
    );

    receiverAgent.state = senderAgent.state.clone();
    receiverAgent.referenceState = senderAgent.referenceState.clone();

    // Simulate receiver processing this chunk immediately for simplicity in this example
    const reassembled = handleReceivedChunk({
        binaryChunkToDecode: currentChunkConfig.message, 
        receiverAgent, 
        chatConfig: currentChunkConfig, 
        logFn
    });

    if (reassembled) {
        reassembledMessageDuringSend = reassembled;
    }
    
    senderAgent.state = senderAgent.referenceState.clone();

    if (reassembledMessageDuringSend) {
      // logFn(`[Messaging] Full message reassembled during send of chunk ${i+1}. Stopping further chunks for this messageId ${messageId}.`, 'debug');
      break; 
    }
  }
  return reassembledMessageDuringSend; 
}

/**
 * Handles a received binary chunk, decodes it, and attempts to reassemble the full message.
 */
export function handleReceivedChunk({
  binaryChunkToDecode,
  receiverAgent,
  chatConfig,
  logFn = console.log,
  _reassemblyBuffer = null // Allow passing an external buffer
}) {
  const currentReassemblyBuffer = _reassemblyBuffer || reassemblyBuffer; // Use external if provided

  const decodedChunkBinary = receiverAgent.enhancedDecodeMessage(
    chatConfig.threshold,
    chatConfig.useAmplitudeModulation
  );

  if (decodedChunkBinary.length !== chatConfig.primes.length) {
    logFn(`[Messaging] Error: Decoded chunk length ${decodedChunkBinary.length} is not ${chatConfig.primes.length}. Original sent: ${binaryChunkToDecode.length}`, 'error');
    return null;
  }

  let ptr = 0;
  const msgIdBin = decodedChunkBinary.substring(ptr, ptr += HEADER_BIT_LENGTHS.messageId);
  const seqBin = decodedChunkBinary.substring(ptr, ptr += HEADER_BIT_LENGTHS.chunkSequenceNumber);
  const totalBin = decodedChunkBinary.substring(ptr, ptr += HEADER_BIT_LENGTHS.totalChunks);
  const lastBin = decodedChunkBinary.substring(ptr, ptr += HEADER_BIT_LENGTHS.isLastChunk);
  const typeBin = decodedChunkBinary.substring(ptr, ptr += HEADER_BIT_LENGTHS.payloadType);
  const payload = decodedChunkBinary.substring(ptr);

  const messageId = parseInt(msgIdBin, 2);
  const chunkSequenceNumber = parseInt(seqBin, 2);
  const totalChunksInMessage = parseInt(totalBin, 2); // Renamed for clarity
  const isLastChunk = lastBin === '1';

  logFn(`[Messaging] Received chunk for messageId ${messageId}: seq ${chunkSequenceNumber + 1}/${totalChunksInMessage}, last: ${isLastChunk}, type: ${typeBin}. Payload: ${payload.substring(0,30)}...`, 'debug');

  if (!currentReassemblyBuffer[messageId]) {
    currentReassemblyBuffer[messageId] = {
      totalChunks: totalChunksInMessage,
      chunks: {},
      receivedCount: 0,
      payloadType: typeBin
    };
  }
  
  const msgBuffer = currentReassemblyBuffer[messageId];
  if (!msgBuffer.chunks[chunkSequenceNumber]) { // Check if chunk already processed
      msgBuffer.chunks[chunkSequenceNumber] = payload;
      msgBuffer.receivedCount++;
  } else {
      logFn(`[Messaging] Duplicate chunk ${chunkSequenceNumber} for messageId ${messageId} received. Ignoring.`, 'debug');
  }

  if (msgBuffer.receivedCount === msgBuffer.totalChunks) {
    let fullBinaryMessage = "";
    for (let k = 0; k < msgBuffer.totalChunks; k++) {
      if (!msgBuffer.chunks[k]) {
        logFn(`[Messaging] Error: Message ${messageId} complete by count, but chunk ${k} is missing.`, 'error');
        delete currentReassemblyBuffer[messageId];
        return null;
      }
      fullBinaryMessage += msgBuffer.chunks[k];
    }
    
    // Determine original length of binary message before padding
    // This is tricky without sending original length.
    // For now, we assume the last chunk's payload might be padded with '0's.
    // And stringToBinary will handle the conversion.
    // A robust solution would be to send the original bit length of the message in a header field.
    // Or, ensure the last chunk's actual payload length is known.
    // For simplicity, we'll rely on binaryToString to interpret valid characters.

    logFn(`[Messaging] Message ${messageId} reassembled. Type: ${msgBuffer.payloadType}. Full binary: ${fullBinaryMessage.substring(0,60)}...`, 'info');
    const result = { fullBinaryMessage, payloadType: msgBuffer.payloadType };
    delete currentReassemblyBuffer[messageId];
    return result;
  }

  return null; 
}