import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponent } from '../feature/modulo/modulo.component';
import { MotivoFormComponent } from '../feature/motivo/form/motivo-form.component';
import { MotivoListComponent } from '../feature/motivo/list/motivo-list.component';
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
      {path: 'motivo-form', component:MotivoFormComponent},
      {path: 'motivo-form/:id', component:MotivoFormComponent},
      {path: 'motivo-list', component:MotivoListComponent},
      {path: 'sugerencia', component:SugerenciaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
