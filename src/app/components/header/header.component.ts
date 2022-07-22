import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DatosService } from 'src/app/shared/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public datos: any[] = [];  // variable de isnatncia para almacenar  los datos del servciio 
  public aleatorio = 0;
  public hideHeader: boolean = false;
  public hiddenRoutes = ['/login', '/signup'];


  constructor(private datosService: DatosService, private router: Router) {    /// inyeccion dels ervicio
    this.datos = datosService.getDatos();                // alamcen en la variable de isnatncia  los datos recuperados del swervicio
    this.aleatorio = datosService.setAleatorio(10000, 25000);
  }

  ngOnInit(): void {
    this.detectarRuta()
  }

  detectarRuta() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.hideHeader = this.hiddenRoutes.some(ruta => event?.url == ruta)
      });
  }

  isCollapse = false;   // guardamos el valor
  toggleState() { // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }

}
