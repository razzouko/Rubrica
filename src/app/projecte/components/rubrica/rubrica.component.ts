import { Component, OnInit } from '@angular/core';
import { criteri } from '../../model/entitats/implementacions/criteri';
import { CriteriComponent } from '../criteri/criteri.component';
@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  criteris: Array<criteri> = [];

  constructor() { }

  ngOnInit(): void {
    this.obtenirObjectesCriteri();
  }

   objectesDeLocalStorage(){
      let values = [];
      let keys = Object.keys(localStorage);
      let i = keys.length;
  
      while ( i-- ) {
        if(keys[i] !== null)
          values.push( [keys[i] , JSON.parse(<string> localStorage.getItem(keys[i]))] );

        }
        console.log(values);
       return values;
  }

  obtenirObjectesCriteri(){

    let localStObj = this.objectesDeLocalStorage();

    for (let i = 0; i < localStObj.length; i++) {

       let objCriteri = new criteri(<string> localStObj[i][0], localStObj[i][1]);
       this.criteris.push(objCriteri);
    }

    console.log(this.criteris);

  }


}
  


