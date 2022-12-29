import { ivaloracio } from "../interficies/ivaloracio";

export class valoracio implements ivaloracio{

    titol!: string;
    numero!: number;

    constructor(titol: string , numero : number){
        this.titol = titol;
        this.numero = numero;
    }

    getTitol(){
        return this.titol;
    }
    
}