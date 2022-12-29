import { ivaloracio } from "./ivaloracio";

export interface icriteri <T extends ivaloracio>{

    titolCriteri : string;  
    valoracions : Array<T>;

}