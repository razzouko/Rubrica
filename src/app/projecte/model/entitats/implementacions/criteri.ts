import { VirtualTimeScheduler } from "rxjs";
import { icriteri } from "../interficies/icriteri";

export class criteri implements icriteri{
   
     numero!: number;
     titol!: string;

    constructor(titol : string , numero : number ){

        this.titol = titol;
        this.numero = numero;
    }

    getTitol(){
        return this.titol;
    }

    getNumero(){
        return this.numero;
    }


}