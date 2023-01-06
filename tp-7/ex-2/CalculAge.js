class CalculAge{
    
    constructor(v1) {
        this.a=v1;
        this.aujourhui=new Date();
    }  
    calcul(){
 let age=this.aujourhui.getFullYear()-this.a.getFullYear();
 let mois=this.aujourhui.getMonth()-this.a.getMonth();
            return ' <b> Vous avez ' + age+' ans et '+ mois+' mois';
    }
    }
    export { CalculAge}