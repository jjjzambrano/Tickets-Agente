import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponent } from '../feature/modulo/modulo.component';
import { MotivoComponent } from '../feature/motivo/motivo.component';
import { RolComponent } from '../feature/rol/rol.component';
import { SugerenciaComponent } from '../feature/sugerencia/sugerencia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'rol', component:RolComponent},
      {path: 'modulo', component:ModuloComponent},
      {path: 'motivo', component:MotivoComponent},
      {path: 'sugerencia', component:SugerenciaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
