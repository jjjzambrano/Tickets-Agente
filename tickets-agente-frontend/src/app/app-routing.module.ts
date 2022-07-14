import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MotivoComponent } from './motivo/motivo.component';


const routes: Routes = [
  {path: 'motivo', component:MotivoComponent},
  {path: 'motivo/:id', component:MotivoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
