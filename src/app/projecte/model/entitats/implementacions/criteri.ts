import { icriteri } from "../interficies/icriteri";
import { valoracio } from "./valoracio";

export class criteri implements icriteri<valoracio>{
   
     titolCriteri!: string;
     valoracions: valoracio[] = new Array<valoracio>;

    constructor(titol : string , arrValoracions : Array<valoracio>  ){
        this.titolCriteri = titol;
        this.afegirValoracions(arrValoracions);
    }   

    getTitol(){
        return this.titolCriteri;
    }

    afegirValoracions( arrValoracions : Array<valoracio> ){

        for (let i = 0; i < arrValoracions.length; i++) {
            let objValoracio = new valoracio(arrValoracions[i].titolValoracio , arrValoracions[i].numero) ;
            this.valoracions.push(objValoracio);
        }

    }

}