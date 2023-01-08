import { Component, OnInit } from '@angular/core';
import { criteri } from '../../model/entitats/implementacions/criteri';
import { compareNums } from '../../helps/helpers';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  criteris: Array<criteri> = [];
  valoracionsNumDiff: Array<number> = [];
  eleccions = new Map();
  sumaEleccions = [0, 0]; // [suma de les eleccions, suma total]
  mostrarResultat = false;
  hiHanDades = (Object.keys(localStorage).length > 0) ? true : false ;

  constructor() { }

  ngOnInit(): void {

    this.valoracionsNumDiff = this.obtenirNumerosDiff();
    this.obtenirObjectesCriteri();
    this.iniciarMapa();
  }

  obtenirObjectesCriteri() {

    let localStObj = this.objectesDeLocalStorage();

    for (let i = 0; i < localStObj.length; i++) {
      let objCriteri = new criteri(<string>localStObj[i][0], localStObj[i][1]); // (titol criteri , valoracions[])
      this.criteris.push(objCriteri);
    }
  }

  objectesDeLocalStorage() {

    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      if (keys[i] !== null) {
        values.push([keys[i], JSON.parse(<string>localStorage.getItem(keys[i]))]);
      }
    }
    return values;
  }

  obtenirNumerosDiff() {
    let dadesCriteris = this.objectesDeLocalStorage();
    let diferents: number[] = [];
    for (let i = 0; i < dadesCriteris.length; i++) {
      let valoracions = dadesCriteris[i][1];
      this.sumaEleccions[1] += this.valoracioMesGran(valoracions); // aprofitant el bucle que recorre les valoracions calculem el valor maxim de la rubrica
      for (let j = 0; j < valoracions.length; j++) {
        if (!diferents.includes(parseInt(valoracions[j].numero))) {
          diferents.push(parseInt(valoracions[j].numero))
        }
      }
    }
    return diferents.sort(compareNums);
  }

  valoracioMesGran(dadesCriteri: any[]): number {
    let max: number = 0;
    for (let i = 0; i < dadesCriteri.length; i++) {
      if (dadesCriteri[i].numero > max) {
        max = parseInt(dadesCriteri[i].numero);
      }
    }
    return max;
  }

  iniciarMapa() {

    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
        this.eleccions.set(keys[i] , -1);
    }

  }

  seleccionarValoracio(titolCriteri: string, num: number) {
    this.eleccions.set(titolCriteri, num);
  }

  esSeleccionat(titolCriteri: string, num: number) {

    let seleccio = this.eleccions.get(titolCriteri);
    if (seleccio == num)
      return true;
    else
      return false;
  }


  calcularResultat() {

    let faltaCriteri = false;
    let numero = "";
    for (let [key, value] of this.eleccions) {
      numero = <string>value;
      if(parseInt(numero) == -1){
        this.sumaEleccions[0] = 0;
        faltaCriteri = true;
        break;
      }
      this.sumaEleccions[0] += parseInt(numero);
    }

    if(faltaCriteri){
      alert("No es pot calcular, falta un criteri per seleccionar")
    }else{
      this.mostrarResultat = true;
    }
  }

}

