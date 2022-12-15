const CalculException = class extends Error {
  constructor() {
    super('Entrez une chiffre!');
  }
}
export { CalculException }