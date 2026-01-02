const BaseAgent = require('./BaseAgent');

/**
 * EchoAgent - Agent exemple qui répète les messages
 * 
 * Cet agent démontre l'utilisation de BaseAgent de manière simple.
 * Il sert d'exemple pédagogique pour créer vos propres agents.
 * 
 * @author Ali Staifi
 * @license BUSL-1.1
 */

class EchoAgent extends BaseAgent {
  constructor(config = {}) {
    super({
      ...config,
      name: config.name || 'EchoAgent',
      type: 'echo',
      capabilities: ['echo', 'repeat', 'mirror', 'respond']
    });
    
    this.echoCount = 0;
    this.history = [];
  }

  /**
   * Initialise l'agent Echo
   */
  async initialize() {
    await super.initialize();
    console.log(`[${this.name}] Ready to echo messages!`);
    return { success: true, message: 'EchoAgent initialized and ready' };
  }

  /**
   * Exécute une tâche d'écho
   * @param {Object} task - Tâche contenant le message à répéter
   * @returns {Object} - Résultat avec l'écho
   */
  async execute(task) {
    this.setStatus('busy');
    
    console.log(`[${this.name}] Executing task:`, task);
    
    // Validation
    if (!task || !task.message) {
      this.setStatus('error');
      return {
        success: false,
        error: 'No message provided',
        agent: this.name
      };
    }
    
    // Logique d'écho
    const result = {
      success: true,
      original: task.message,
      echo: `Echo: ${task.message}`,
      reversed: this.reverseMessage(task.message),
      uppercase: task.message.toUpperCase(),
      lowercase: task.message.toLowerCase(),
      length: task.message.length,
      timestamp: new Date().toISOString(),
      agent: this.name,
      echoNumber: ++this.echoCount
    };
    
    // Sauvegarde dans l'historique
    this.history.push({
      message: task.message,
      timestamp: new Date(),
      echoNumber: this.echoCount
    });
    
    this.setStatus('active');
    return result;
  }

  /**
   * Inverse un message
   * @param {string} message - Message à inverser
   * @returns {string} - Message inversé
   */
  reverseMessage(message) {
    return message.split('').reverse().join('');
  }

  /**
   * Reçoit et répond automatiquement à un message
   * @param {Object} message - Message reçu
   * @returns {Object} - Réponse avec écho
   */
  async receiveMessage(message) {
    console.log(`[${this.name}] Received message:`, message);
    this.lastActivity = new Date();
    
    const content = message.content || message.message || 'No content';
    
    return {
      success: true,
      type: 'echo-response',
      original: message,
      echo: `Echo from ${this.name}: ${content}`,
      reversed: this.reverseMessage(content),
      processedBy: this.id,
      timestamp: new Date()
    };
  }

  /**
   * Retourne l'historique des échos
   * @returns {Array} - Historique
   */
  getHistory() {
    return this.history;
  }

  /**
   * Retourne les statistiques de l'agent
   * @returns {Object} - Statistiques
   */
  getStats() {
    return {
      ...this.getStatus(),
      totalEchoes: this.echoCount,
      historySize: this.history.length,
      averageMessageLength: this.calculateAverageLength()
    };
  }

  /**
   * Calcule la longueur moyenne des messages
   * @returns {number} - Longueur moyenne
   */
  calculateAverageLength() {
    if (this.history.length === 0) return 0;
    
    const totalLength = this.history.reduce((sum, item) => {
      return sum + (item.message?.length || 0);
    }, 0);
    
    return Math.round(totalLength / this.history.length);
  }

  /**
   * Efface l'historique
   */
  clearHistory() {
    this.history = [];
    this.echoCount = 0;
    console.log(`[${this.name}] History cleared`);
  }
}

module.exports = EchoAgent;
