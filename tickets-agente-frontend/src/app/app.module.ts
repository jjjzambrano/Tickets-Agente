import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModuloComponent } from './modulo/modulo.component';
import { RolComponent } from './rol/rol.component';
import { MotivoComponent } from './motivo/motivo.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloComponent,
    SugerenciaComponent,
    RolComponent,
    MotivoComponent
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

