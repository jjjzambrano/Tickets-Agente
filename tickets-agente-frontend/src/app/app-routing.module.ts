import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ModuloComponent } from './modulo/modulo.component';

const routes: Routes = [
  {path: 'modulo', component:ModuloComponent},
  {path: 'modulo/:id', component:ModuloComponent}
=======
import { SugerenciaComponent } from './sugerencia/sugerencia.component';

const routes: Routes = [
  {path: 'sugerencia', component:SugerenciaComponent},
  {path: 'sugerencia/:id', component:SugerenciaComponent}
>>>>>>> sugerencia
=======
import { RolComponent } from './rol/rol.component';

const routes: Routes = [
  {path: 'rol', component:RolComponent},
  {path: 'rol/:id', component:RolComponent}
>>>>>>> rol
=======

import { MotivoComponent } from './motivo/motivo.component';


const routes: Routes = [
  {path: 'motivo', component:MotivoComponent},
  {path: 'motivo/:id', component:MotivoComponent}

>>>>>>> motivo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
