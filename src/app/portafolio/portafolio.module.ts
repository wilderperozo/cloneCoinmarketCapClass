import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CoinsService } from '../shared/coins.service';
import { Placement as PopperPlacement, Options } from '@popperjs/core';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  {path: '', component: PortafolioComponent, title: 'Portafolio super chevere'},
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
    NgbAlertModule,
    NgSelectModule,


  ],
  exports: [RouterModule, PortafolioComponent],
  providers: [UserService, CoinsService]
})
export class PortafolioModule { }
