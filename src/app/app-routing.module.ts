import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'portafolio', loadChildren: () => import('./portafolio/portafolio.module').then(m => m.PortafolioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
