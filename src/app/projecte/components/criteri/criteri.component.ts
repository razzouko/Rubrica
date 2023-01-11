import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { objectesDeLocalStorage } from '../../helps/helpers';
import { valoracio } from '../../model/entitats/implementacions/valoracio';
@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {

  formCriteriNou!: FormGroup;
  formCriterisCreats!: FormGroup
  canvisCriteris = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formCriteriNou = this.fb.group({
      titolCriteri: ['', Validators.minLength(5)],
      valoracions: this.fb.array([])
    })

    this.formCriterisCreats = this.fb.group({
      criteris: this.fb.array([])
    })

    this.construirCriterisCreats();
  }

  getCriterisCreats(){
    return this.formCriterisCreats.get("criteris") as FormArray;
  }

  getValoracioPerIndex( i : number){
    return this.getCriterisCreats().at(i).get("valoracions") as FormArray;
  }

  getValoracionsFormNou() {
    return this.formCriteriNou.get("valoracions") as FormArray; //  pot donar problemes de al intentar accedir als seus valors
  }

  eliminarValoracioCreada(indexCriteri : number , indexValoracio : number){
    let valoracions = this.getValoracioPerIndex(indexCriteri);
    valoracions.removeAt(indexValoracio);
    this.canvisCriteris = true;
  }

  eliminarCriteriCreat(indexCriteri : number){
    this.getCriterisCreats().removeAt(indexCriteri);
    this.canvisCriteris = true;
  }

  afegirValoracio() {
    this.getValoracionsFormNou().push(this.novaValoracio());
  }


  novaValoracio(): FormGroup {
    return this.fb.group({
      titolValoracio: ['', Validators.minLength(5)],
      numero: ['', Validators.pattern('[0-9]+')] //  es guarda en format string, al construir la classe es fa el parse a number
    });
  }

  valoracioExistent(titolValoracio: string, numero: number): FormGroup {
    return this.fb.group({
      titolValoracio: titolValoracio,
      numero: numero
    })
  }

  getCriteriExistent(titolCriteri: string, valoracions: Array<valoracio>): FormGroup {
    return this.fb.group({
      titolCriteri: titolCriteri,
      valoracions: this.fb.array(this.getFormGroupValoracions(valoracions))
    })
  }


  getFormGroupValoracions(valoracions: Array<valoracio>): Array<FormGroup> {
    let valoracionsConstruides: Array<FormGroup> = [];
    valoracions.forEach(element =>
      valoracionsConstruides.push(this.valoracioExistent(element.titolValoracio, element.numero))
    );
    return valoracionsConstruides;
  }

  construirCriterisCreats() {

    let localObj = objectesDeLocalStorage();
    let arrCriterisCreats = this.formCriterisCreats.get("criteris") as FormArray;
    for (let i = 0; i < localObj.length; i++) {
      let objCriteri = localObj[i];
      arrCriterisCreats.push(this.getCriteriExistent(objCriteri[0], objCriteri[1]))
    }

    

  }

  guardarCriteri() {

    if (this.formCriteriNou.invalid) {
      alert("Hi han camps invalids");
    } else if (this.formCriteriNou.value.valoracions.length <= 0) {
      alert("Falten valoracions");
    } else {
      let formobj = {
        titol: this.formCriteriNou.value.titolCriteri,
        valors: this.formCriteriNou.value.valoracions
      };
      localStorage.setItem(formobj.titol, JSON.stringify(formobj.valors));
      window.location.reload();
    }
  }

  guardarNousCanvis(){
    let criterisNous = this.getCriterisCreats();
    localStorage.clear();
    for (let i = 0; i < criterisNous.length ; i++) {
        let criteri = criterisNous.at(i);
        localStorage.setItem(criteri.value.titolCriteri , JSON.stringify(criteri.value.valoracions))
    }
    window.location.reload();
  }




}
