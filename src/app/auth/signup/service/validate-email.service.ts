import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export class ValidateEmailService{

  constructor(private http: HttpClient) {
  }

  validateEmail(email: string){
    const url = `${environment.API_URI}/auth/validate-email?q=${email}`;
    return this.http.get(url)
  }

}
