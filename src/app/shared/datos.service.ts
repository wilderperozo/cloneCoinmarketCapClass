import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: any[] = [
    {
      descripcion: 'Cripto',
      valor: this.setAleatorio(10000, 25000)
    },
    {
      descripcion: 'Exchanges',
      valor: this.setAleatorio(100, 700)
    },
    {
      descripcion: 'Market Cap',
      valor: this.setAleatorio(1000000, 5000000)
    },
    {
      descripcion: 'Dominance: BTC',
      valor: this.setAleatorio(10, 50)
    },
    {
      descripcion: 'ETH',
      valor: this.setAleatorio(5, 30)
    },
    {
      descripcion: 'ETH Gas',
      valor: this.setAleatorio(10, 100)
    }
  ];


  dataM = Object.values(this.datos);

  getDatos() {
    return this.dataM;
  }

  setAleatorio(valorMin: number, valorMax: number) {
    //return  Math.random();
    return Math.round(Math.random() * (valorMax - valorMin) + (valorMin));

  }

  constructor() { }
}
