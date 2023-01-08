import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {

  formCriteri!: FormGroup;
  creacioCriteris: boolean = true;
  creacioValoracions: boolean = false;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formCriteri = this.fb.group({
      titolCriteri: ['', Validators.minLength(5)],
      valoracions: this.fb.array([])
    })
  }


  afegirValoracio() {
    this.valoracions().push(this.novaValoracio());
  }


  novaValoracio(): FormGroup {
    return this.fb.group({
      titolValoracio: ['', Validators.minLength(5)],
      numero: ['', Validators.pattern('[0-9]+')] //  es guarda en format string, al construir la classe es fa el parse a number
    });
  }

  valoracions() {
    return this.formCriteri.get("valoracions") as FormArray; //  pot donar problemes de al intentar accedir als seus valors
  }


  guardarCriteri() {

    if(this.formCriteri.invalid){
      alert("Hi han camps invalids");
    }else if(this.formCriteri.value.valoracions.length <= 0){
      alert("Falten valoracions");
    }else{
    let formobj = {
      titol: this.formCriteri.value.titolCriteri,
      valors: this.formCriteri.value.valoracions
    };
    localStorage.setItem(formobj.titol, JSON.stringify(formobj.valors));
    window.location.reload();
    }
  }


}
