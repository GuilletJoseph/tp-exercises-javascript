import {CalculException} from './Exception.js';

class Calcul {
    
    constructor(v1,v2) {
        this.a=v1;
        this.b=v2;  
    }  
    calcul(){
    if (isNaN(this.a) || isNaN(this.b)) {
    throw new CalculException();
     }
        let resultat = this.a +this.b;
        return 'Le résultat de l’addition est :  <b>' + resultat;
    
    }
    }
    export { Calcul }