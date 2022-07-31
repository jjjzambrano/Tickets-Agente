import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolFormComponent } from './rol/form/rol.form.component';
import { ModuloComponent } from './modulo/modulo.component';
import { MotivoComponent } from './motivo/motivo.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { FormsModule } from '@angular/forms';
import { RolListComponent } from './rol/list/rol-list.component';
import { RolToolbarComponent } from './rol/toolbar/rol-toolbar.component';
import { PersonaComboboxComponent } from './persona/persona-combobox.component';
import { ModuloSearchComponent } from './modulo/modulo-search/modulo-search.component';


@NgModule({
  declarations: [
    RolFormComponent,
    ModuloComponent,
    MotivoComponent,
    SugerenciaComponent,
    RolListComponent,
    RolToolbarComponent,
    PersonaComboboxComponent,
    ModuloSearchComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
