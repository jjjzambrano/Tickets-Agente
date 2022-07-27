import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolComponent } from './rol/rol.component';
import { ModuloComponent } from './modulo/modulo.component';
import { MotivoFormComponent } from './motivo/form/motivo-form.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { FormsModule } from '@angular/forms';
import { MotivoListComponent } from './motivo/list/motivo-list.component';
import { MotivoToolbarComponent } from './motivo/toolbar/motivo-toolbar.component';


@NgModule({
  declarations: [
    RolComponent,
    ModuloComponent,
    SugerenciaComponent,
    MotivoListComponent,
    MotivoToolbarComponent,
    MotivoFormComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
