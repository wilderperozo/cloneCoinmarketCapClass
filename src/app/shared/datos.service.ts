import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: any[] = [  
    {
      descripcion: 'Cripto',
      valor: this.setAleatorio(10000,25000)
    },
    {
      descripcion: 'Exchanges',
      valor: this.setAleatorio(100,700)
    },
    {
      descripcion: 'Market Cap',
      valor: this.setAleatorio(1000000,5000000)
    }
  ];


  dataM= Object.values(this.datos);

  getDatos(){
    return  this.dataM;
  }

  setAleatorio(valorMin: number, valorMax: number){
    //return  Math.random();
    return Math.round(Math.random()*(valorMax-valorMin)+(valorMin));

  }

  constructor() { }
}
