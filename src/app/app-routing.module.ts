import { DatosComponent } from './shared/components/datos/datos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'datos', component: DatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [DatosComponent]
})
export class AppRoutingModule { }
