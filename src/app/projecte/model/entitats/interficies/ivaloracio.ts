
import { icriteri } from "./icriteri";

export interface ivaloracio<T extends icriteri> {

    titol : string;
    numero : number;
    array_criteris : Array<T>; 


}