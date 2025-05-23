import { PrimeState, EnhancedCommunicationAgent } from '../../dist/primetunnel.browser.js'; // Assuming bundled output
// We will create a custom NonlocalComms wrapper for the browser


const CHAT_SESSION_ID = 'default-pulsar-chat-network'; // Default network ID

const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const statusDiv = document.getElementById('status');

let comms; // NonlocalComms instance

function appendMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
}

function updateStatus(text, type = 'info') {
    statusDiv.textContent = text;
    statusDiv.style.backgroundColor = {
        info: '#ffc107', // Yellow
        success: '#28a745', // Green
        error: '#dc3545' // Red
    }[type];
    statusDiv.style.color = type === 'success' ? 'white' : '#333';
}

async function initializeChat() {
    updateStatus('Initializing Prime Resonance Engine...');
    const resonanceEngine = new PrimeResonance(CHAT_SESSION_ID);
    resonanceEngine.init();

    updateStatus('Connecting to Nonlocal Chat Network...');
    comms = new NonlocalComms(resonanceEngine);

    comms.on('ready', () => {
        updateStatus('Connected to Nonlocal Chat Network!', 'success');
        messageInput.disabled = false;
        sendButton.disabled = false;
        messageInput.focus();
        appendMessage('You have joined the chat.', 'info');
    });

    comms.on('data', (data) => {
        console.log('Received data:', data);
        // Assuming data is a simple string message for this example
        appendMessage(data, 'received');
    });

    comms.on('error', (error) => {
        updateStatus(`Error: ${error.message}`, 'error');
        console.error('NonlocalComms error:', error);
    });

    comms.on('disconnect', () => {
        updateStatus('Disconnected from Nonlocal Chat Network.', 'info');
        messageInput.disabled = true;
        sendButton.disabled = true;
        appendMessage('You have left the chat.', 'info');
    });

    comms.connect();
}

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        comms.send(message);
        appendMessage(message, 'sent');
        messageInput.value = '';
    }
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

// Disable input and button until connected
messageInput.disabled = true;
sendButton.disabled = true;

initializeChat();