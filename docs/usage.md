# Usage and Examples

This section provides practical guidance on how to utilize the `primetunnel` library to establish and manage nonlocal communication.

## Installation

To use `primetunnel`, first ensure you have Node.js installed. Then, you can install the library via npm:

```bash
npm install primetunnel
```

## Establishing a Nonlocal Link

Establishing a nonlocal link involves two primary steps: initializing the `PrimeResonance` engine and then using the `NonlocalComms` interface to connect.

### Step 1: Initialize the Resonance Engine

The `PrimeResonance` engine (from `src/core.js`) is responsible for generating and managing the prime resonance patterns. It needs to be initialized with a unique identifier for the communication session.

```javascript
import { PrimeResonance } from 'primetunnel/core';

const resonanceEngine = new PrimeResonance('my-unique-session-id');
resonanceEngine.init(); // Initialize the resonance patterns
```

### Step 2: Establish Nonlocal Communication

Once the resonance engine is initialized, you can use the `NonlocalComms` interface (from `src/nonlocal-comms.js`) to establish a connection with another entity. Both entities must use the same session ID and be attuned to the same prime resonance.

#### Sender Side

```javascript
import { NonlocalComms } from 'primetunnel/nonlocal-comms';
import { PrimeResonance } from 'primetunnel/core';

const sessionId = 'my-unique-session-id';
const resonanceEngine = new PrimeResonance(sessionId);
resonanceEngine.init();

const senderComms = new NonlocalComms(resonanceEngine);

senderComms.on('ready', () => {
    console.log('Sender ready for nonlocal communication.');
    senderComms.send('Hello, resonant partner!');
});

senderComms.on('data', (data) => {
    console.log('Sender received:', data);
});

senderComms.connect(); // Initiate the nonlocal link
```

#### Receiver Side

```javascript
import { NonlocalComms } from 'primetunnel/nonlocal-comms';
import { PrimeResonance } from 'primetunnel/core';

const sessionId = 'my-unique-session-id';
const resonanceEngine = new PrimeResonance(sessionId);
resonanceEngine.init();

const receiverComms = new NonlocalComms(resonanceEngine);

receiverComms.on('ready', () => {
    console.log('Receiver ready for nonlocal communication.');
});

receiverComms.on('data', (data) => {
    console.log('Receiver received:', data);
    receiverComms.send('Acknowledged: ' + data);
});

receiverComms.connect(); // Listen for the nonlocal link
```

## Sending and Receiving Data

Once the nonlocal link is established, you can use the `send` method to transmit data and listen for the `data` event to receive information.

```javascript
// Assuming senderComms and receiverComms are already established as above

// Sender sends data
senderComms.send('This is a nonlocal message.');

// Receiver receives data (via the 'data' event listener)
// console.log('Receiver received:', 'This is a nonlocal message.');

// Receiver sends a reply
receiverComms.send('Message received and acknowledged.');

// Sender receives reply (via the 'data' event listener)
// console.log('Sender received:', 'Message received and acknowledged.');
```

## Important Considerations

*   **Session ID Uniqueness**: The `sessionId` is crucial for establishing a unique resonant tunnel. Ensure it is truly unique for each independent communication channel.
*   **Resonance Attunement**: Both parties must be attuned to the same prime resonance. The library handles the underlying attunement, but consistent `sessionId` usage is key.
*   **Data Integrity**: While the prime tunnel offers inherent security, it's good practice to implement application-level data validation and error handling.

This usage guide provides a basic overview. Explore the `examples/` directory for more advanced use cases and demonstrations of `primetunnel`'s capabilities.