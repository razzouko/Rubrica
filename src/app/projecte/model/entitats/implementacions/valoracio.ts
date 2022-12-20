import { ivaloracio } from "../interficies/ivaloracio";
import { criteri } from "./criteri";

export class valoracio implements ivaloracio<criteri>{

    titol!: string;
    array_criteris: criteri[] = new Array<criteri>;
    numero!: number;

    constructor(titol: string){
        this.titol = titol;
    }

    getTitol(){
        return this.titol;
    }
    
    afegirCriteri( criteri : criteri ){

        for (let i = 0; i < this.array_criteris.length; i++) {
            let criteriComparar = this.array_criteris[i];
            if (criteriComparar.getNumero() == criteri.getNumero()) {
                    return false;
            }
        }
        
        this.array_criteris.push(criteri);
        return true;
        // ordenar?

    }
}