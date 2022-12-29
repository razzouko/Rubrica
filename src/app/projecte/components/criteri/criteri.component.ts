import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray ,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {

  formRubrica!: FormGroup;
  creacioCriteris : boolean = false;
  creacioValoracions : boolean = false;

  

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {

    this.formRubrica = this.fb.group({
      titolRubrica: new FormControl('Rubrica') ,
      criteris : this.fb.array([])
    })
  }

  afegirCriteri(){
    this.criteris().push(this.nouCriteri());
  }

  afegirValoracio(nomCriteri : string){ 
    // acabar de definir
    let valoracions = this.criteris().get("criteri1")?.get("valoracions") as FormArray;
    valoracions.push(this.novaValoracio());
  }

  nouCriteri() : FormGroup{
    return this.fb.group({
      titolCriteri: new FormControl('Nom Criteri'),
      valoracions : this.fb.array([])
    });
  }

  novaValoracio() : FormGroup{
    return this.fb.group({
      titolValoracio : ['TitolValoracio' , Validators.required],
      numero : 0
    })
  }

  criteris(){
    return this.formRubrica.get("criteris") as FormArray; //  pot donar problemes de al intentar accedir als seus valors
  }

  valoracions(index : number){
    return this.criteris().at(index).get("valoracions") as FormArray;
  }

  guardarCriteris(){
    console.log("hola");
  }

  hihanCriteris(){
    return (this.criteris().length == 0) ? true: false;
  }

  mostrar(valoracions : boolean , criteris : boolean){
    this.creacioValoracions = valoracions;
    this.creacioCriteris = criteris;
  }



}
