import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/shared/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public datos: any[] = [];  // variable de isnatncia para almacenar  los datos del servciio 
  public aleatorio = 0;


  constructor(private datosService: DatosService) {    /// inyeccion dels ervicio
    this.datos = datosService.getDatos();                // alamcen en la variable de isnatncia  los datos recuperados del swervicio
    this.aleatorio = datosService.setAleatorio(10000, 25000);
    //console.log(this.datos);

  }

  ngOnInit(): void {
  }

  isCollapse = false;   // guardamos el valor
  toggleState() { // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }

}
