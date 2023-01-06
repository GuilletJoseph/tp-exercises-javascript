const ControleException = class extends Error {

  constructor(message) {
    super('Erreur de saisie: ');
    this.name = message;
  }
}



export { ControleException }