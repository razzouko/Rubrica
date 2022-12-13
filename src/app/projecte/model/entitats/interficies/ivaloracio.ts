
import { icriteri } from "./icriteri";

export interface ivaloracio<T extends icriteri> {

    titol : string;
    array_criteris : Array<T>; 

}