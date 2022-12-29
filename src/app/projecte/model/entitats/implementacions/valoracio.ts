import { ivaloracio } from "../interficies/ivaloracio";

export class valoracio implements ivaloracio{

    titolValoracio!: string;
    numero!: number;

    constructor(titol: string , numero : number){
        this.titolValoracio = titol;
        this.numero = numero;
    }

    getTitol(){
        return this.titolValoracio;
    }
    
}