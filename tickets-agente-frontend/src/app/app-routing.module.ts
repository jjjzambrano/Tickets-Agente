import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponent } from './modulo/modulo.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { RolComponent } from './rol/rol.component';
import { MotivoComponent } from './motivo/motivo.component';


const routes: Routes = [
  {path: 'modulo', component:ModuloComponent},
  {path: 'modulo/:id', component:ModuloComponent},
  {path: 'sugerencia', component:SugerenciaComponent},
  {path: 'sugerencia/:id', component:SugerenciaComponent},
  {path: 'rol', component:RolComponent},
  {path: 'rol/:id', component:RolComponent},
  {path: 'motivo', component:MotivoComponent},
  {path: 'motivo/:id', component:MotivoComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
