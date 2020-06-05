import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ComponentecualquieraComponent } from './componentecualquiera/componentecualquiera.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EstudiantesComponent, ComponentecualquieraComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

