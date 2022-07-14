import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';

const routes: Routes = [
  {path: 'sugerencia', component:SugerenciaComponent},
  {path: 'sugerencia/:id', component:SugerenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
