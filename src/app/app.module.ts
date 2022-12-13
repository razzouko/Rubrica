import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValoracioComponent } from './projecte/components/valoracio/valoracio.component';
import { CriteriComponent } from './projecte/components/criteri/criteri.component';

@NgModule({
  declarations: [
    AppComponent,
    ValoracioComponent,
    CriteriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
