import { CalculException } from './Exception.js';

class Calcul {

    constructor(v1, v2, v3) {
        this.a = v1;
        this.b = v2;
        this.op = v3;
    }
    calcul() {
        if (isNaN(this.a) || isNaN(this.b)) {
            throw new CalculException();
        }
        var resultat;
        switch (this.op) {
            case '+':
                resultat = this.a + this.b;
                return 'Le résultat de l’addition est :  <b>' + resultat;
                break;
            case '-':
                resultat = this.a - this.b;
                return 'Le résultat de la soustraction est :  <b>' + resultat;
                break;
            case '*':
                resultat = this.a * this.b;
                return 'Le résultat de la multiplication est :  <b>' + resultat;
                break;
            case '/':
                resultat = this.a / this.b;
                return 'Le résultat de la division est :  <b>' + resultat;
                break;

        }


    }
}
export { Calcul }