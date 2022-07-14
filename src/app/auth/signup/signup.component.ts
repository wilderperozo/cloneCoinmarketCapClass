import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidateEmailService} from "./service/validate-email.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ValidateEmailService]
})
export class SignupComponent implements OnInit {

  public email = new FormControl('', [Validators.email, Validators.required])
  public name = new FormControl('');
  public lastName = new FormControl('');
  public password = new FormControl('', [Validators.min(4), Validators.required] );
  public confirmPassword = new FormControl('', [Validators.min(4), Validators.required]);

  public form = new FormGroup({
    email: this.email,
    name: this.name,
    lastName: this.lastName,
    password: this.password,
    confirmPassword: this.confirmPassword
  });

  constructor(private validateEmailService: ValidateEmailService) { }

  ngOnInit(): void {
    this.validateEmail();

  }

  submit(){
    console.log('Envio formulario')
  }


  validateEmail(){
  }

}
