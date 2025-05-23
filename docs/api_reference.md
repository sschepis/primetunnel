# API Reference

This section provides a detailed reference for the public API of the `primetunnel` library.

## `PrimeResonance` Class (`src/core.js`)

The `PrimeResonance` class is the core engine for managing prime resonance patterns.

### Constructor

`new PrimeResonance(sessionId: string)`

*   `sessionId`: A unique string identifier for the communication session. This ID is crucial for establishing a unique resonant tunnel.

### Methods

#### `init(): void`

Initializes the resonance engine. This method generates the initial prime sequences and synthesizes the base resonance patterns. It must be called before establishing any nonlocal communication.

#### `getResonancePattern(): object`

Returns the current active resonance pattern. The structure of this object is internal and subject to change, but it represents the complex vibrational signature of the current prime resonance.

#### `attune(targetPattern: object): boolean`

Attempts to attune the local resonance engine to a given `targetPattern`. This method is primarily used internally by `NonlocalComms` to synchronize with a remote entity.

*   `targetPattern`: The resonance pattern to attune to.
*   Returns `true` if attunement is successful, `false` otherwise.

## `NonlocalComms` Class (`src/nonlocal-comms.js`)

The `NonlocalComms` class provides the high-level interface for initiating and managing nonlocal communication sessions. It extends Node.js's `EventEmitter` and emits various events during the communication lifecycle.

### Constructor

`new NonlocalComms(resonanceEngine: PrimeResonance)`

*   `resonanceEngine`: An instance of the `PrimeResonance` class, already initialized.

### Methods

#### `connect(): void`

Initiates the nonlocal communication link. For a sender, this attempts to establish a connection. For a receiver, it starts listening for incoming connections.

#### `send(data: any): void`

Sends data across the established nonlocal link. The data can be any serializable JavaScript value.

*   `data`: The data to be sent.

#### `disconnect(): void`

Closes the nonlocal communication link.

### Events

#### `ready`

Emitted when the nonlocal communication link is successfully established and ready for data exchange.

*   `listener: () => void`

#### `data`

Emitted when data is received across the nonlocal link.

*   `listener: (data: any) => void`
    *   `data`: The received data.

#### `error`

Emitted if an error occurs during the nonlocal communication process.

*   `listener: (error: Error) => void`
    *   `error`: The error object.

#### `disconnect`

Emitted when the nonlocal communication link is closed.

*   `listener: () => void`

## `pulsar-frequencies.js` (Internal Module)

This module is primarily for internal use by `NonlocalComms` and `PrimeResonance` to handle the encoding and decoding of data into pulsar frequencies. Its public API is not intended for direct consumption by library users.

## `prime-resonance.js` (Internal Module)

This module contains the theoretical and mathematical models for Prime Resonance. It is not intended for direct interaction by library users.

## `config.js` (Configuration)

This module exports an object containing configurable parameters for the library.

```javascript
// Example of accessing configuration
import config from 'primetunnel/config';

console.log('Resonance Depth:', config.resonanceDepth);
```

The properties available in the `config` object are subject to change but typically include parameters like `resonanceDepth`, `frequencyBandwidth`, and `securityParameters`.