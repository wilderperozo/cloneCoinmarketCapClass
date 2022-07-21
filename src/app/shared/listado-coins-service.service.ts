import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListadoCoinsServiceService {

  constructor(
    private http: HttpClient
  ) { }
  Listado(): Observable<any>{
    const url = `${environment.URI_COINS_LS}`;
    return this.http.get<any>(url);
  }
}
