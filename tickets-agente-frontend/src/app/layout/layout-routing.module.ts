import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponent } from '../feature/modulo/modulo.component';
import { MotivoComponent } from '../feature/motivo/motivo.component';
import { RolFormComponent } from '../feature/rol/form/rol.form.component';
import { RolListComponent } from '../feature/rol/list/rol-list.component';
import { SugerenciaComponent } from '../feature/sugerencia/sugerencia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'rol-form', component:RolFormComponent},
      {path: 'rol-form/:id', component:RolFormComponent},
      {path: 'rol-list', component:RolListComponent},
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
