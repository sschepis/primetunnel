/**
 * Simple Mesh Network Demo
 * Demonstrates basic mesh network functionality with quantum channels
 * Shows separation of control plane (local network) and data plane (quantum)
 */

import QuantumMeshNode from '../src/network/mesh-node.js';
import { NETWORK_EVENTS } from '../src/network/network-protocol.js';

class MeshNetworkDemo {
  constructor() {
    this.nodes = new Map();
    this.messageLog = [];
    this.isRunning = false;
  }

  async createNode(nodeId, config = {}) {
    if (this.nodes.has(nodeId)) {
      throw new Error(`Node ${nodeId} already exists`);
    }

    const nodeConfig = {
      networkId: 'demo-mesh',
      verbose: false,
      enableEncryption: true,
      securityLevel: 'standard',
      localNetwork: {
        discoveryPort: 8080 + this.nodes.size, // Use different ports for each node
      },
      ...config
    };

    const node = new QuantumMeshNode(nodeId, nodeConfig);
    
    // Setup event logging
    this.setupNodeLogging(node);
    
    this.nodes.set(nodeId, node);
    console.log(`📡 Created node: ${nodeId}`);
    
    return node;
  }

  setupNodeLogging(node) {
    const nodeId = node.getNodeId();
    
    node.on(NETWORK_EVENTS.NODE_JOINED, (data) => {
      if (data.nodeId !== nodeId) {
        this.log(`🔗 [${nodeId}] Node joined network: ${data.nodeId}`);
      }
    });
    
    node.on(NETWORK_EVENTS.NODE_LEFT, (data) => {
      this.log(`💔 [${nodeId}] Node left network: ${data.nodeId}`);
    });
    
    node.on(NETWORK_EVENTS.CHANNEL_ESTABLISHED, (data) => {
      this.log(`⚛️  [${nodeId}] Quantum channel established to: ${data.remoteNodeId}`);
    });
    
    node.on(NETWORK_EVENTS.CHANNEL_CLOSED, (data) => {
      this.log(`🚫 [${nodeId}] Quantum channel closed to: ${data.remoteNodeId}`);
    });
    
    node.on(NETWORK_EVENTS.MESSAGE_RECEIVED, (data) => {
      this.log(`📨 [${nodeId}] Message received from ${data.sourceNodeId}: "${data.data}"`);
    });
    
    node.on(NETWORK_EVENTS.ERROR_OCCURRED, (data) => {
      this.log(`❌ [${nodeId}] Error: ${data.error || data.type}`);
    });
  }

  async startNetwork() {
    if (this.isRunning) {
      throw new Error('Network is already running');
    }

    console.log('\n🚀 Starting Quantum Mesh Network Demo...\n');
    
    // Join all nodes to the network
    const joinPromises = [];
    for (const [nodeId, node] of this.nodes.entries()) {
      joinPromises.push(
        node.join('demo-mesh').catch(error => {
          console.error(`Failed to join node ${nodeId}:`, error.message);
        })
      );
    }
    
    await Promise.allSettled(joinPromises);
    
    // Wait for network stabilization
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    this.isRunning = true;
    console.log('\n✅ Mesh network is now active!\n');
  }

  async stopNetwork() {
    if (!this.isRunning) {
      return;
    }

    console.log('\n🛑 Stopping mesh network...\n');
    
    const leavePromises = [];
    for (const [nodeId, node] of this.nodes.entries()) {
      leavePromises.push(
        node.leave().catch(error => {
          console.error(`Failed to stop node ${nodeId}:`, error.message);
        })
      );
    }
    
    await Promise.allSettled(leavePromises);
    
    this.isRunning = false;
    console.log('✅ Network stopped\n');
  }

  async sendMessage(fromNodeId, toNodeId, message) {
    const fromNode = this.nodes.get(fromNodeId);
    const toNode = this.nodes.get(toNodeId);
    
    if (!fromNode) {
      throw new Error(`Source node ${fromNodeId} not found`);
    }
    
    if (!toNode) {
      throw new Error(`Target node ${toNodeId} not found`);
    }
    
    this.log(`📤 [${fromNodeId}] Sending to ${toNodeId}: "${message}"`);
    
    try {
      await fromNode.sendMessage(toNodeId, message);
      this.log(`✅ [${fromNodeId}] Message sent successfully`);
    } catch (error) {
      this.log(`❌ [${fromNodeId}] Failed to send message: ${error.message}`);
    }
  }

  async broadcastMessage(fromNodeId, message) {
    const fromNode = this.nodes.get(fromNodeId);
    
    if (!fromNode) {
      throw new Error(`Source node ${fromNodeId} not found`);
    }
    
    this.log(`📡 [${fromNodeId}] Broadcasting: "${message}"`);
    
    try {
      const results = await fromNode.broadcastMessage(message);
      const successful = results.filter(r => r.success).length;
      const total = results.length;
      
      this.log(`✅ [${fromNodeId}] Broadcast completed: ${successful}/${total} nodes reached`);
    } catch (error) {
      this.log(`❌ [${fromNodeId}] Failed to broadcast: ${error.message}`);
    }
  }

  showNetworkStatus() {
    console.log('\n📊 Network Status:');
    console.log('==================');
    
    for (const [nodeId, node] of this.nodes.entries()) {
      const stats = node.getStatistics();
      const connectedNodes = node.getConnectedNodes();
      
      console.log(`\n🔹 Node: ${nodeId}`);
      console.log(`   Status: ${node.isConnected() ? '🟢 Connected' : '🔴 Disconnected'}`);
      console.log(`   Known Nodes: ${stats.network.knownNodes}`);
      console.log(`   Quantum Channels: ${stats.network.quantumChannels} (${stats.network.healthyChannels} healthy)`);
      console.log(`   Connected To: [${connectedNodes.join(', ')}]`);
      console.log(`   Messages: ${stats.messages.sent} sent, ${stats.messages.received} received`);
      console.log(`   Errors: ${stats.performance.errors}`);
    }
  }

  showMessageLog() {
    console.log('\n📝 Message Log:');
    console.log('================');
    
    if (this.messageLog.length === 0) {
      console.log('No messages logged yet.');
      return;
    }
    
    this.messageLog.slice(-20).forEach(entry => {
      console.log(`${entry.timestamp} - ${entry.message}`);
    });
  }

  log(message) {
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    const logEntry = { timestamp, message };
    
    this.messageLog.push(logEntry);
    console.log(`${timestamp} - ${message}`);
  }

  getNode(nodeId) {
    return this.nodes.get(nodeId);
  }

  getAllNodes() {
    return Array.from(this.nodes.keys());
  }
}

// Demo Script
async function runDemo() {
  const demo = new MeshNetworkDemo();
  
  try {
    console.log('🎯 Quantum Mesh Network Demo');
    console.log('=============================\n');
    
    // Create three nodes
    await demo.createNode('alice');
    await demo.createNode('bob');
    await demo.createNode('charlie');
    
    console.log('📡 Created 3 nodes: Alice, Bob, Charlie\n');
    
    // Start the network
    await demo.startNetwork();
    
    // Show initial network status
    demo.showNetworkStatus();
    
    console.log('\n🔄 Testing point-to-point messaging...\n');
    
    // Test point-to-point messaging
    await demo.sendMessage('alice', 'bob', 'Hello Bob, this is Alice!');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await demo.sendMessage('bob', 'charlie', 'Hi Charlie, Bob here!');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await demo.sendMessage('charlie', 'alice', 'Greetings Alice from Charlie!');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('\n📡 Testing broadcast messaging...\n');
    
    // Test broadcast messaging
    await demo.broadcastMessage('alice', 'Hello everyone from Alice!');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await demo.broadcastMessage('bob', 'Bob broadcasting to all nodes!');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show final network status
    demo.showNetworkStatus();
    
    // Show message log
    demo.showMessageLog();
    
    console.log('\n✨ Demo completed successfully!');
    console.log('\nKey Features Demonstrated:');
    console.log('• Local network discovery and coordination');
    console.log('• Quantum channel establishment');
    console.log('• Secure message transmission over quantum channels');
    console.log('• Network topology management');
    console.log('• Health monitoring and error handling');
    console.log('• Complete separation of control and data planes\n');
    
    // Keep running for a bit to observe ongoing network activity
    console.log('🔍 Observing network for 10 more seconds...\n');
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Stop the network
    await demo.stopNetwork();
    
  } catch (error) {
    console.error('❌ Demo failed:', error);
    await demo.stopNetwork();
    process.exit(1);
  }
}

// Run the demo if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runDemo().then(() => {
    console.log('🎉 Demo finished successfully!');
    process.exit(0);
  }).catch(error => {
    console.error('💥 Demo crashed:', error);
    process.exit(1);
  });
}

export default MeshNetworkDemo;