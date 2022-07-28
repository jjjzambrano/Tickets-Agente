import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolComponent } from './rol/rol.component';
import { SugerenciaFormComponent } from './sugerencia/form/sugerencia-form.component';
import { MotivoFormComponent } from './motivo/form/motivo-form.component';
import { FormsModule } from '@angular/forms';
import { SugerenciaListComponent } from './sugerencia/list/sugerencia-list.component';
import { SugerenciaToolbarComponent } from './sugerencia/toolbar/sugerencia-toolbar.component';
import { ModuloFormComponent } from './modulo/form/modulo-form.component';
import { ModuloListComponent } from './modulo/list/modulo-list.component';
import { ModuloToolbarComponent } from './modulo/toolbar/modulo-toolbar.component';
import { MotivoListComponent } from './motivo/list/motivo-list.component';
import { MotivoToolbarComponent } from './motivo/toolbar/motivo-toolbar.component';



@NgModule({
  declarations: [
    RolComponent,
    SugerenciaFormComponent,
    SugerenciaListComponent,
    SugerenciaToolbarComponent,
    ModuloListComponent,
    ModuloFormComponent,
    ModuloToolbarComponent,
    MotivoFormComponent,
    MotivoListComponent,
    MotivoToolbarComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
