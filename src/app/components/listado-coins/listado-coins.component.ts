import { Component, OnInit } from '@angular/core';
import { ListadoCoinsServiceService } from 'src/app/shared/listado-coins-service.service';

@Component({
  selector: 'app-listado-coins',
  templateUrl: './listado-coins.component.html',
  styleUrls: ['./listado-coins.component.scss']
})
export class ListadoCoinsComponent implements OnInit {
  listaCoins : any = [];

  constructor(
    private listCoinsService: ListadoCoinsServiceService
  ) { }

  ngOnInit(): void {
    this.ListadoCoins();
  }

  ListadoCoins(){
    this.listCoinsService.Listado().subscribe((response) => {
      this.listaCoins = response;
      console.log(this.listaCoins);

    }, err => {
      console.error('Algo salio mal', err.error.message);
    } )
  }

}
