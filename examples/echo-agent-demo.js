/**
 * Démo EchoAgent - Exemple d'utilisation simple
 * 
 * Ce script démontre comment utiliser un agent EvoCore.
 * 
 * @author Ali Staifi
 * @license BUSL-1.1
 */

const EchoAgent = require('../core/agents/EchoAgent');

async function runDemo() {
  console.log('🚀 EvoCore - EchoAgent Demo\n');
  console.log('═══════════════════════════════════════\n');

  // Créer un agent
  const agent = new EchoAgent({
    name: 'Demo Echo Agent'
  });

  // Initialiser l'agent
  console.log('📌 Step 1: Initializing agent...');
  await agent.initialize();
  console.log('✅ Agent initialized\n');

  // Afficher le statut
  console.log('📌 Step 2: Agent status');
  console.log(agent.getStatus());
  console.log('');

  // Exécuter quelques tâches
  console.log('📌 Step 3: Executing tasks...\n');

  const messages = [
    'Hello EvoCore!',
    'This is a test',
    'Multi-agent systems are awesome'
  ];

  for (const message of messages) {
    console.log(`💬 Input: "${message}"`);
    const result = await agent.execute({ message });
    console.log(`🔄 Echo: "${result.echo}"`);
    console.log(`🔀 Reversed: "${result.reversed}"`);
    console.log(`📊 Length: ${result.length} characters`);
    console.log('');
  }

  // Tester la communication entre agents
  console.log('📌 Step 4: Testing agent communication...\n');
  
  const response = await agent.receiveMessage({
    from: 'another-agent',
    content: 'Can you hear me?'
  });
  
  console.log('📨 Message received and processed:');
  console.log(response);
  console.log('');

  // Afficher les statistiques
  console.log('📌 Step 5: Agent statistics');
  console.log(agent.getStats());
  console.log('');

  // Afficher l'historique
  console.log('📌 Step 6: Agent history');
  console.log(agent.getHistory());
  console.log('');

  // Arrêter l'agent
  console.log('📌 Step 7: Shutting down agent...');
  await agent.shutdown();
  console.log('✅ Agent shutdown complete\n');

  console.log('═══════════════════════════════════════');
  console.log('✨ Demo completed successfully!');
  console.log('');
  console.log('Next steps:');
  console.log('- Create your own agent by extending BaseAgent');
  console.log('- Explore the documentation');
  console.log('- Join the community on Discord');
  console.log('');
  console.log('GitHub: https://github.com/ali-staifi/Evocore-AGI');
  console.log('═══════════════════════════════════════\n');
}

// Exécuter la démo
runDemo().catch(error => {
  console.error('❌ Error running demo:', error);
  process.exit(1);
});
