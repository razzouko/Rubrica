import { icriteri } from "./icriteri";
import { ivaloracio } from "./ivaloracio";

export interface rubrica <T extends ivaloracio<icriteri>>{

    titol : string;
    valoracions : Array<T>;

}