import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../shared/user.service";
import {NotifierModule} from "angular-notifier";
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'Login super chevere'},
  {path: 'signup', component: SignupComponent, title: 'Registro super chevere'}
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NotifierModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [UserService]
})
export class AuthModule { }
