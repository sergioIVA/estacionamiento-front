import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPuestosComponent } from './feature/puesto/listar-puestos/listar-puestos.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarVehiculoComponent } from './feature/vehiculo/listar-vehiculo/listar-vehiculo.component';
import { CrearVehiculoComponent } from './feature/vehiculo/crear-vehiculo/crear-vehiculo.component';
import { CrearReservaComponent } from './feature/reserva/crear-reserva/crear-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPuestosComponent,
    ListarVehiculoComponent,
    CrearVehiculoComponent,
    CrearReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
