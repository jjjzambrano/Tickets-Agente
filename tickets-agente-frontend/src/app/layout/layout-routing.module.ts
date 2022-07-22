import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponent } from '../feature/modulo/modulo.component';
import { MotivoComponent } from '../feature/motivo/motivo.component';
import { RolComponent } from '../feature/rol/rol.component';
import { SugerenciaFormComponent } from '../feature/sugerencia/form/sugerencia-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { SugerenciaListComponent } from '../feature/sugerencia/list/sugerencia-list.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'rol', component:RolComponent},
      {path: 'modulo', component:ModuloComponent},
      {path: 'motivo', component:MotivoComponent},
      {path: 'sugerencia-form', component:SugerenciaFormComponent},
      {path: 'sugerencia-form/:id', component:SugerenciaFormComponent},
      {path: 'sugerencia-list', component:SugerenciaListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
