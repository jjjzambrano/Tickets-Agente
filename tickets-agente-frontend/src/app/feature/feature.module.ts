import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolFormComponent } from './rol/form/rol.form.component';
import { RolListComponent } from './rol/list/rol-list.component';
import { RolToolbarComponent } from './rol/toolbar/rol-toolbar.component';
import { ModuloFormComponent } from './modulo/form/modulo-form.component';
import { ModuloListComponent } from './modulo/list/modulo-list.component';
import { ModuloToolbarComponent } from './modulo/toolbar/modulo-toolbar.component';
import { MotivoFormComponent } from './motivo/form/motivo-form.component';
import { MotivoListComponent } from './motivo/list/motivo-list.component';
import { MotivoToolbarComponent } from './motivo/toolbar/motivo-toolbar.component';
import { SugerenciaFormComponent } from './sugerencia/form/sugerencia-form.component';
import { SugerenciaListComponent } from './sugerencia/list/sugerencia-list.component';
import { SugerenciaToolbarComponent } from './sugerencia/toolbar/sugerencia-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ModuloComboboxComponent } from './modulo/combo-box/modulo-combobox.component';

@NgModule({
  declarations: [
    RolFormComponent,
    RolListComponent,
    RolToolbarComponent,
    ModuloListComponent,
    ModuloFormComponent,
    ModuloToolbarComponent,
    MotivoFormComponent,
    MotivoListComponent,
    MotivoToolbarComponent,
    SugerenciaFormComponent,
    SugerenciaListComponent,
    SugerenciaToolbarComponent,
    ModuloComboboxComponent,
  ],

  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})

export class FeatureModule {}