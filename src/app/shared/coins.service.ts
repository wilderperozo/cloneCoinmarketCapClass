import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private url:string='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc';
  constructor(private http:HttpClient) { }
  getCoins(){
    return this.http.get(this.url);
  }
}
