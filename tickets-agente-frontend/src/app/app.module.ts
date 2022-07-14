import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RolComponent
>>>>>>> rol
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
