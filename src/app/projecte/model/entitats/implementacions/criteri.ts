import { icriteri } from "../interficies/icriteri";
import { valoracio } from "./valoracio";

export class criteri implements icriteri<valoracio>{
   
     titol!: string;
     valoracions!: valoracio[];

    constructor(titol : string  ){
        this.titol = titol;
    }

    getTitol(){
        return this.titol;
    }



}