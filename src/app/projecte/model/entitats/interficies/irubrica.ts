import { icriteri } from "./icriteri";
import { ivaloracio } from "./ivaloracio";


export interface irubrica<T extends ivaloracio<icriteri>> {

    titol: string;
    valoracions: Array<T>;

}
