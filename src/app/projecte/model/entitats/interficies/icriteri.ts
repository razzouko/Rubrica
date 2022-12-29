import { ivaloracio } from "./ivaloracio";

export interface icriteri <T extends ivaloracio>{

    titol : string;  
    valoracions : Array<T>;

}