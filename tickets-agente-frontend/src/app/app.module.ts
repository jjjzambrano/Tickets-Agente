import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ModuloComponent } from './modulo/modulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloComponent
=======
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
@NgModule({
  declarations: [
    AppComponent,
    SugerenciaComponent
>>>>>>> sugerencia
=======
import { RolComponent } from './rol/rol.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
import { MotivoComponent } from './motivo/motivo.component';
>>>>>>> motivo

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RolComponent
>>>>>>> rol
=======
    MotivoComponent
>>>>>>> motivo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

