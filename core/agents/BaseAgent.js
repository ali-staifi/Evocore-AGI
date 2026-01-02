/**
 * BaseAgent - Interface de base pour tous les agents EvoCore
 * 
 * Chaque agent hérite de cette classe et implémente sa logique spécifique.
 * Les agents sont les "cellules" du système cybernétique EvoCore.
 * 
 * @author Ali Staifi
 * @license BUSL-1.1
 */

class BaseAgent {
  constructor(config) {
    this.id = config.id || this.generateId();
    this.name = config.name || 'UnnamedAgent';
    this.type = config.type || 'generic';
    this.status = 'idle'; // idle, busy, active, error
    this.capabilities = config.capabilities || [];
    this.createdAt = new Date();
    this.lastActivity = null;
  }

  /**
   * Génère un ID unique pour l'agent
   * @returns {string} ID unique
   */
  generateId() {
    return `agent-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Initialise l'agent
   * À surcharger dans les classes enfants si nécessaire
   */
  async initialize() {
    console.log(`[${this.name}] Initializing...`);
    this.status = 'active';
    this.lastActivity = new Date();
    return { success: true, message: 'Agent initialized' };
  }

  /**
   * Exécute une tâche
   * DOIT être implémenté par les classes enfants
   * 
   * @param {Object} task - La tâche à exécuter
   * @returns {Object} - Le résultat de la tâche
   */
  async execute(task) {
    throw new Error(`execute() must be implemented by ${this.constructor.name}`);
  }

  /**
   * Communique avec un autre agent
   * 
   * @param {string} agentId - ID de l'agent destinataire
   * @param {Object} message - Message à envoyer
   * @returns {Object} - Confirmation d'envoi
   */
  async sendToAgent(agentId, message) {
    console.log(`[${this.name}] Sending to ${agentId}:`, message);
    this.lastActivity = new Date();
    
    return {
      success: true,
      from: this.id,
      to: agentId,
      message: message,
      timestamp: new Date()
    };
  }

  /**
   * Reçoit un message d'un autre agent
   * Peut être surchargé pour traiter les messages
   * 
   * @param {Object} message - Message reçu
   * @returns {Object} - Réponse au message
   */
  async receiveMessage(message) {
    console.log(`[${this.name}] Received:`, message);
    this.lastActivity = new Date();
    
    return {
      success: true,
      received: true,
      processedBy: this.id,
      timestamp: new Date()
    };
  }

  /**
   * Retourne les capacités de l'agent
   * @returns {Array} - Liste des capacités
   */
  getCapabilities() {
    return this.capabilities;
  }

  /**
   * Vérifie si l'agent a une capacité spécifique
   * @param {string} capability - Capacité à vérifier
   * @returns {boolean}
   */
  hasCapability(capability) {
    return this.capabilities.includes(capability);
  }

  /**
   * Retourne le statut complet de l'agent
   * @returns {Object} - Statut de l'agent
   */
  getStatus() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      status: this.status,
      capabilities: this.capabilities,
      createdAt: this.createdAt,
      lastActivity: this.lastActivity,
      uptime: this.getUptime()
    };
  }

  /**
   * Calcule le temps d'activité de l'agent
   * @returns {number} - Temps en millisecondes
   */
  getUptime() {
    return Date.now() - this.createdAt.getTime();
  }

  /**
   * Change le statut de l'agent
   * @param {string} newStatus - Nouveau statut
   */
  setStatus(newStatus) {
    const validStatuses = ['idle', 'busy', 'active', 'error'];
    if (validStatuses.includes(newStatus)) {
      this.status = newStatus;
      this.lastActivity = new Date();
    } else {
      throw new Error(`Invalid status: ${newStatus}`);
    }
  }

  /**
   * Arrête l'agent proprement
   */
  async shutdown() {
    console.log(`[${this.name}] Shutting down...`);
    this.status = 'idle';
    return { success: true, message: 'Agent shutdown complete' };
  }
}

module.exports = BaseAgent;
