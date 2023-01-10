import { valoracio } from "src/app/projecte/model/entitats/implementacions/valoracio";


export function compareValoracions(a: valoracio, b: valoracio) {

    if (a.numero < b.numero)
        return -1;
    else if (a.numero > b.numero)
        return 1;
    else
        return 0;
}

export function compareNums(a: number, b: number) {

    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else
        return 0;


}

export function objectesDeLocalStorage() {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      if (keys[i] !== null && keys[i] != "xxxXRubricaXxxx" ) {
        values.push([keys[i], JSON.parse(<string>localStorage.getItem(keys[i]))]);
      }
    }
    return values;
  }