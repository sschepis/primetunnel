# PrimeTunnel Terminal Chat Implementation Plan

## 1. Overview

This document outlines the plan to implement an enhanced terminal-based chat application using the `prime-tunnel-communication` npm package. The key improvements include robust message handling via chunking and a client announcement protocol.

**Key Decisions:**
*   **Communication Strategy:** Message chunking for messages exceeding simulation capacity.
*   **Simulation Bit Capacity (`CHAT_CONFIG.primes.length`):** 32 bits.
*   **Reliability (ACKs):** Deferred for this phase.
*   **Terminal UI (TUI):** Utilize Node.js `readline` and the `chalk` library for basic styling.
*   **Client Protocol:** Clients will announce themselves upon connection.

## 2. Overall Architecture

The system will consist of:
*   **`prime-tunnel-communication` npm package:** Provides the core simulation logic. ([`primetunnel/index.js`](./primetunnel/index.js:0), [`primetunnel/prime-resonance.js`](./primetunnel/prime-resonance.js:0), [`primetunnel/prime-tunnel.js`](./primetunnel/prime-tunnel.js:0)).
*   **`terminal-chat.js` example application:** ([`primetunnel/examples/terminal-chat.js`](./primetunnel/examples/terminal-chat.js:0)) A client application demonstrating the enhanced features.

## 3. Phase 1: Core `prime-tunnel` npm Package Enhancements (Minor)

*   No major changes are anticipated for the core simulation logic itself to support chunking directly. Chunking will be handled at a higher level.
*   Ensure all necessary classes and configurations (`EnhancedCommunicationAgent`, `CONFIG`, etc.) are cleanly exported via `primetunnel/index.js`. (Mostly complete).

## 4. Phase 2: Advanced Messaging Layer

This layer, likely implemented within `terminal-chat.js` or a new helper module (e.g., `primetunnel/examples/messaging.js`), will handle message chunking and reassembly.

### 4.1. Define Chunking Protocol

*   **Purpose:** To break down messages longer than the simulation's 32-bit capacity into smaller, transmittable pieces.
*   **Chunk Structure (Binary Encoded - Total 32 bits):**
    *   `messageId` (4 bits): Unique ID for the entire message (allows 16 concurrent messages).
    *   `chunkSequenceNumber` (4 bits): Order of this chunk (allows 16 chunks per message).
    *   `totalChunks` (4 bits): Total number of chunks for this message.
    *   `isLastChunk` (1 bit): Boolean flag (0 for not last, 1 for last).
    *   `payloadType` (2 bits):
        *   `00`: CHAT_MESSAGE
        *   `01`: ANNOUNCE_CLIENT
        *   `10`: ACK (Deferred)
        *   `11`: Reserved
    *   `payload` (17 bits): The actual data segment (`32 - (4+4+4+1+2) = 17 bits`).

### 4.2. Chunking Logic (Sender Side)

*   Implement a function: `async function sendMessage(fullMessageString, messageType, senderAgent, receiverAgent, chatConfig)`
    *   Generate a unique `messageId`.
    *   Convert `fullMessageString` to its full binary representation.
    *   Calculate `totalChunks` based on the 17-bit `payload` capacity per chunk.
    *   Iterate, creating chunks:
        *   For each chunk, construct the binary header (as defined above).
        *   Take the next 17-bit segment of the full binary message as `payload`. Pad the last payload if necessary.
        *   Combine header + payload into a single 32-bit binary string.
        *   Update `chatConfig.message` with this 32-bit binary chunk.
        *   Use `senderAgent.enhancedSendMessage(chatConfig.message, chatConfig.epsilon, ...)` to encode.
        *   Simulate transfer: `receiverAgent.state = senderAgent.state.clone(); receiverAgent.referenceState = senderAgent.referenceState.clone();`
        *   (ACKs are deferred).
        *   Reset sender state for next transmission: `senderAgent.state = senderAgent.referenceState.clone();`

### 4.3. Reassembly Logic (Receiver Side)

*   Implement a function: `function handleReceivedChunk(binaryChunk32bit, receiverAgent, chatConfig, reassemblyBuffer)`
    *   `reassemblyBuffer` will be an object like: `{ messageId1: { totalChunks: N, isComplete: false, chunks: {0: payload, 1: payload,...} }, ... }`
    *   Decode `binaryChunk32bit` using `receiverAgent.enhancedDecodeMessage(chatConfig.threshold, ...)`.
    *   Parse the binary header from the decoded 32-bit chunk.
    *   Store the 17-bit `payload` in `reassemblyBuffer` under its `messageId` and `chunkSequenceNumber`.
    *   Update `totalChunks` for the `messageId` if not already set.
    *   If `isLastChunk` is true, mark it.
    *   Check if all chunks for that `messageId` (from `0` to `totalChunks - 1`) are present.
        *   If yes, reconstruct the full binary message from the ordered payloads.
        *   Remove the completed message from `reassemblyBuffer`.
        *   Return an object: `{ fullBinaryMessage: "...", payloadType: "..." }`.
    *   Return `null` if the message is not yet complete.

## 5. Phase 3: Terminal Chat Application (`primetunnel/examples/terminal-chat.js`)

### 5.1. `CHAT_CONFIG`
*   Update `CHAT_CONFIG` in `terminal-chat.js`:
    *   `primes`: An array of 32 prime numbers (actual values to be chosen, e.g., from a larger list or generated).
    *   `message`: This will be dynamically set per chunk by the messaging layer.
    *   `verbose`: `false` (to keep simulation logs clean during chat).

### 5.2. Initialization & Client Announcement

*   On startup, each client (UserA, UserB) will:
    *   Define its username (e.g., "UserA", "UserB").
    *   Create an "ANNOUNCE_CLIENT" message containing its username.
    *   Use the `sendMessage` function (from Phase 2) to send this announcement to the other client, with `payloadType = ANNOUNCE_CLIENT`.
*   When an "ANNOUNCE_CLIENT" type message is fully reassembled by the receiver:
    *   The receiver's UI will display a system message: `[System] UserB has connected.` (using `chalk` for color).

### 5.3. User Interface (CLI)

*   **Input:** Use `readline` for user input.
*   **Output/Chat History:**
    *   Maintain an array to store chat history objects (e.g., `{ user: "UserA", text: "Hello", type: "chat" }` or `{ text: "UserB connected", type: "system" }`).
    *   After each message is sent or received, or a command is processed, clear the console and redraw the chat history followed by the input prompt.
    *   Prefix messages with the sender's name (e.g., `UserA: Hello there!`).
    *   Use `chalk` for different colors: one for UserA, one for UserB, one for system messages.
*   **Commands:**
    *   `/switch`: To switch the active user.
    *   `/quit` or `/exit`: To end the chat.
    *   `/clear`: To clear the displayed chat history.

### 5.4. Main Chat Loop

*   The active user types a message.
*   The message string is passed to the `sendMessage` function (from Phase 2) with `payloadType = CHAT_MESSAGE`.
*   The `sendMessage` function handles chunking and simulated transmission of each chunk to the other agent.
*   The receiving agent's `handleReceivedChunk` logic processes incoming chunks.
*   When a full `CHAT_MESSAGE` is reassembled:
    *   It's converted from its full binary form back to a string.
    *   The string message is added to the chat history.
    *   The UI is updated to display the new message.
*   The turn switches to the other user.

## 6. Helper Functions (in `terminal-chat.js` or `messaging.js`)

*   `stringToBinary(str)`: Converts a string to a full binary string (e.g., 8 bits per char).
*   `binaryToString(binStr)`: Converts a full binary string back to a text string.
*   Functions to generate/select 32 prime numbers for `CHAT_CONFIG`.

## 7. Mermaid Diagram (Flow)

```mermaid
graph TD
    subgraph UserA Terminal
        A1[Input Message/Command] --> A2{Process Input};
    end

    subgraph UserB Terminal
        B1[Display Output/History] <-- B2{Process Received Data};
    end

    A2 -- Chat Message --> ML1[MessagingLayer.sendMessage];
    ML1 -- Chunks --> SIM1[Simulate Chunk Transfer];
    SIM1 -- Received Chunks --> ML2[MessagingLayer.handleReceivedChunk];
    ML2 -- Reassembled Message/Event --> B2;

    %% Client Announcement
    StartA[UserA Init] --> AnnounceA[Prepare ANNOUNCE_CLIENT (UserA)];
    AnnounceA --> ML1_AnnA[MessagingLayer.sendMessage (ANNOUNCE_CLIENT)];
    ML1_AnnA --> SIM_AnnA[Simulate Announce Transfer];
    SIM_AnnA --> ML2_AnnB[UserB: MessagingLayer.handleReceivedChunk];
    ML2_AnnB -- Announce Event --> B2_SysMsgA[UserB: Display "UserA Connected"];

    StartB[UserB Init] --> AnnounceB[Prepare ANNOUNCE_CLIENT (UserB)];
    AnnounceB --> ML1_AnnB[MessagingLayer.sendMessage (ANNOUNCE_CLIENT)];
    ML1_AnnB --> SIM_AnnB[Simulate Announce Transfer];
    SIM_AnnB --> ML2_AnnA[UserA: MessagingLayer.handleReceivedChunk];
    ML2_AnnA -- Announce Event --> A_SysMsgB[UserA: Display "UserB Connected"];

    %% UI Interaction
    A2 -- UI Command --> UICtrlA[Update UI State A];
    UICtrlA --> A1_Prompt[Refresh Input Prompt A];
    B2 -- Display Data --> UICtrlB[Update UI State B];
    UICtrlB --> B1_Display[Refresh Display B];

```

This plan provides a structured approach to developing the enhanced terminal chat application.