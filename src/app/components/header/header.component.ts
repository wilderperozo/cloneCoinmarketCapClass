import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DatosService } from 'src/app/shared/datos.service';

////////////// para cambio de idiona 
import { TranslateService } from '@ngx-translate/core';

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
  public selectedDevice = 1;

  constructor(private datosService: DatosService, public translate: TranslateService, private router: Router) {    /// inyeccion dels ervicio  // cambio de idioma
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

  onChangeLanguage(val: any) {
    //console.log(val)
    if (val == 1) {
      this.translate.use('en');
    }
    if (val == 2) {
      this.translate.use('es');
    }
  }
}