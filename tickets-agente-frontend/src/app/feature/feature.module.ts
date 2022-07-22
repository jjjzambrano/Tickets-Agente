import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolComponent } from './rol/rol.component';
import { MotivoComponent } from './motivo/motivo.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { FormsModule } from '@angular/forms';
import { ModuloFormComponent } from './modulo/form/modulo-form.component';
import { ModuloListComponent } from './modulo/list/modulo-list.component';
import { ModuloToolbarComponent } from './modulo/toolbar/modulo-toolbar.component';


@NgModule({
  declarations: [
    RolComponent,
    ModuloListComponent,
    ModuloFormComponent,
    ModuloToolbarComponent,
    MotivoComponent,
    SugerenciaComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
