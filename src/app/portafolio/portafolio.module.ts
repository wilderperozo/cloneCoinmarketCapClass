import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';


const routes: Routes = [
  {path: '', component: PortafolioComponent, title: 'Login super chevere'},
];

@NgModule({
  declarations: [
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [UserService]
})
export class PortafolioModule { }
