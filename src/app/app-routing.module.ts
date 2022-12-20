import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubricaComponent as rubrica} from './projecte/components/rubrica/rubrica.component';
import { CriteriComponent as criteri} from './projecte/components/criteri/criteri.component';

const routes: Routes = [
  {path : "rubrica" , component : rubrica },
  {path : "criteri" , component : criteri }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
