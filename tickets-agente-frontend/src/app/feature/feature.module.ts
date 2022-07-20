import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolComponent } from './rol/rol.component';
import { ModuloComponent } from './modulo/modulo.component';
import { MotivoComponent } from './motivo/motivo.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RolComponent,
    ModuloComponent,
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
