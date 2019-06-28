import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPuestosComponent } from './feature/puesto/listar-puestos/listar-puestos.component';
import { ListarVehiculoComponent } from './feature/vehiculo/listar-vehiculo/listar-vehiculo.component';

const routes: Routes = [
  {path:'puestos',component:ListarPuestosComponent},
  {path:'vehiculos',component:ListarVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
