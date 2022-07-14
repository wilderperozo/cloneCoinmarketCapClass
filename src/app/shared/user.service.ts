import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User, UserToLogin} from "./interfaces/user";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  login(data: UserToLogin): Observable<User>{
    const url = `${environment.API_URI}/auth/login`;
    return this.http.post<User>(url, data);
  }
}
