import { icriteri } from "../interficies/icriteri";
import { valoracio } from "./valoracio";
import { compareValoracions } from "src/app/projecte/helps/helpers";
export class criteri implements icriteri<valoracio>{
   
     titolCriteri!: string;
     valoracions: valoracio[] = new Array<valoracio>;

    constructor(titol : string , arrValoracions : Array<valoracio>  ){
        this.titolCriteri = titol;
        this.afegirValoracions(arrValoracions);
        this.ordenarValoracions();
    }   

    getTitol(){
        return this.titolCriteri;
    }

    getValoracions(){
        return this.valoracions;
    }

    afegirValoracions( arrValoracions : Array<valoracio> ){

        for (let i = 0; i < arrValoracions.length; i++) {
            let objValoracio = new valoracio(arrValoracions[i].titolValoracio , arrValoracions[i].numero);  
            this.valoracions.push(objValoracio);
        }
    }

    ordenarValoracions(){
        this.valoracions.sort(compareValoracions); // funcio compare està a la carpeta helps
    }

    valoracioPerNumero(numValoracio : number) :  valoracio{
        
        for (let i = 0; i < this.valoracions.length; i++) {
            if (this.valoracions[i].numero == numValoracio)
                return this.valoracions[i];
        }

        return new valoracio ("" , -1);
    }


}