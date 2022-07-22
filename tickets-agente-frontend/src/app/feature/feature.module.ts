import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolComponent } from './rol/rol.component';
import { ModuloComponent } from './modulo/modulo.component';
import { MotivoComponent } from './motivo/motivo.component';
import { SugerenciaFormComponent } from './sugerencia/form/sugerencia-form.component';
import { FormsModule } from '@angular/forms';
import { SugerenciaListComponent } from './sugerencia/list/sugerencia-list.component';
import { SugerenciaToolbarComponent } from './sugerencia/toolbar/sugerencia-toolbar.component';


@NgModule({
  declarations: [
    RolComponent,
    ModuloComponent,
    MotivoComponent,
    SugerenciaFormComponent,
    SugerenciaListComponent,
    SugerenciaToolbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
