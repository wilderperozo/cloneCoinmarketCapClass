import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


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
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [RouterModule],
  providers: [UserService]
})
export class PortafolioModule { }
