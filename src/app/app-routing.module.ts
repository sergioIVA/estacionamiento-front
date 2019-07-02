import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPuestosComponent } from './feature/puesto/listar-puestos/listar-puestos.component';
import { ListarVehiculoComponent } from './feature/vehiculo/listar-vehiculo/listar-vehiculo.component';
import { CrearVehiculoComponent } from './feature/vehiculo/crear-vehiculo/crear-vehiculo.component';
import { CrearReservaComponent } from './feature/reserva/crear-reserva/crear-reserva.component';
import { ListarReservasPendientesComponent } from './feature/reserva/listar-reservas-pendientes/listar-reservas-pendientes.component';
import { HistorialReservaComponent } from './feature/reserva/historial-reserva/historial-reserva.component';
import { PrincipalComponent } from './feature/principal/principal.component';

const routes: Routes = [
  {path:'puestos',component:ListarPuestosComponent},
  {path:'vehiculos',component:ListarVehiculoComponent},
  {path:'crearVehiculo',component:CrearVehiculoComponent},
  {path:'crearReserva',component:CrearReservaComponent},
  {path:'listarReservasPendientes',component:ListarReservasPendientesComponent},
  {path:'historialReserva',component:HistorialReservaComponent},
  {path:'principal',component:PrincipalComponent},
  { path: '', redirectTo: '/principal', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
