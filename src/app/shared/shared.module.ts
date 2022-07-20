import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from './components/datos/datos.component';


@NgModule({
  declarations: [
    DatosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class SharedModule { }
