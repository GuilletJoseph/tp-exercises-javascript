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
        let resultat = this.a * this.b + this.a + this.b;
        return 'Resultat de calcul <b>' + resultat;
    
    }
    }
    export { Calcul }