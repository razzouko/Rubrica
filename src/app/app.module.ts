import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricaComponent } from './projecte/components/rubrica/rubrica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CriteriComponent } from './projecte/components/criteri/criteri.component';

@NgModule({
  declarations: [
    AppComponent,
    RubricaComponent,
    CriteriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
