import { ControleException } from './Exception.js';

class Controle {

    constructor(v1, v2, v3) {
        this.a = v1;
        this.b = v2;
        this.c = v3;
    }
    controle() {
        if ((this.a === "")&&(this.b === "")) {
            throw new ControleException('Le nom et prénom doit être renseigné');
        } 
        if ((this.a === "")) {
            throw new ControleException('Le nom doit être renseigné');
        }   
        if ((this.b === "")) {
            throw new ControleException('Le prénom doit être renseigné');
        } 
        if ((!this.c)) {
            throw new ControleException('La date de naissance doit être renseignée');
        } 
       
        return 'Le résultat de saisie est bon';
        }


}
export { Controle }