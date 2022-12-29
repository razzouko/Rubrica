import { icriteri } from "./icriteri";
import { ivaloracio } from "./ivaloracio";


export interface irubrica<T extends icriteri<ivaloracio>> {

    titol: string;
    criteris: Array<T>;

}
