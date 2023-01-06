class Recente{
    
    constructor(v1,v2) {
        this.a=v1;
        this.b=v2;  
    }  
    recente(){
 
        if (this.a<this.b){
            return 'Le plus recente date est : <b>' + this.b;
       } else {

           return 'Le plus recente date est : <b>' + this.a;
        }
        
    
    }
    }
    export { Recente }