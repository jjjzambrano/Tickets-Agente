import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponent } from './modulo/modulo.component';

const routes: Routes = [
  {path: 'modulo', component:ModuloComponent},
  {path: 'modulo/:id', component:ModuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
