import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolComponent } from './rol/rol.component';
import { MotivoFormComponent } from './motivo/form/motivo-form.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { FormsModule } from '@angular/forms';
import { ModuloFormComponent } from './modulo/form/modulo-form.component';
import { ModuloListComponent } from './modulo/list/modulo-list.component';
import { ModuloToolbarComponent } from './modulo/toolbar/modulo-toolbar.component';
import { MotivoListComponent } from './motivo/list/motivo-list.component';
import { MotivoToolbarComponent } from './motivo/toolbar/motivo-toolbar.component';



@NgModule({
  declarations: [
    RolComponent,
    ModuloListComponent,
    ModuloFormComponent,
    ModuloToolbarComponent,
    MotivoFormComponent,
    MotivoListComponent,
    MotivoToolbarComponent,
    SugerenciaComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
