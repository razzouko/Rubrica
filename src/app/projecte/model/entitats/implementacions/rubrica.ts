import { valoracio } from "./valoracio";
import { irubrica } from "../interficies/irubrica";

export class rubrica implements irubrica<valoracio>{

    titol!: string;
    valoracions!: valoracio[];


    constructor(titol : string){
        this.titol = titol;
    }


    afegirValoracio(valoracio : valoracio){

        if(!this.cercarIgual(valoracio.titol)){
            this.valoracions.push(valoracio);
            return true;
        }else{
            return false;
        }
    }

    cercarIgual(titol : string){

        let valoracions = this.valoracions;
        let trobat = false;
        let pos = 0;

        while(!trobat && pos < valoracions.length){

            if(titol = valoracions[pos].titol){
                trobat = true;
            }else{
                pos++;
            }

        }

        return trobat;

    }
}