import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  public datos: any[]=[];  // variable de isnatncia para almacenar  los datos del servciio 
  public aleatorio=0;

   public languageArray : string[];

  constructor( private datosService: DatosService ) {    /// inyeccion dels ervicio
    this.datos= datosService.getDatos();                // alamcen en la variable de isnatncia  los datos recuperados del swervicio
    this.aleatorio=datosService.setAleatorio(10000,25000);
    console.log(this.datos);

    this.languageArray = ['Java', 'JavaScript', 'Angular JS', 'Node JS', 'Spring', 'Android'];
    console.log(this.languageArray);

   }

  ngOnInit(): void {
  }

}
