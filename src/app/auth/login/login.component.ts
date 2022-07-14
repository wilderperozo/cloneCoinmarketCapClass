import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';
  public errorMessage = '';

  constructor(private userService: UserService, private notifier: NotifierService) {
  }

  ngOnInit(): void {
  }

  send(){
    const {email,password} = this;
    this.userService.login({email, password}).subscribe((response) => {
      this.notifier.notify('success', 'Bienvenido');
    }, err => {
      this.errorMessage = err.error.message;
      console.error('El usuario no esta logeado ', err.error.message);
      this.notifier.notify('error', err.error.message);
    } )
  }
}
