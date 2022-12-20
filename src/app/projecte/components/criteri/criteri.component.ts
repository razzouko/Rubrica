import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray ,Validators } from '@angular/forms';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {

  form!: FormGroup;

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      numero: Number,
      titol: ["" , Validators.required],
      criteris : this.fb.array([])
    })


  }



  nouCriteri(){

    return this.fb.group({
      titol: ['' , Validators.required],
      criteri : []
    });

  }

}
