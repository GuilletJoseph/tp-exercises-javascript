const CalculException = class extends Error {
  constructor() {
    super('Erreur de nombre: ');
    this.name = 'Vous devez saisir un nombre !';
  }
}


const TableException = class extends Error {
  constructor() {
    super('Erreur de tableau: ');
    this.name = 'Le tableau est vide ou contenant une chaine de caractères!';
  }
}

export { CalculException , TableException}