import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/shared/models/vehiculo';
import { Observable } from 'rxjs';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  vehiculos: Observable<Vehiculo[]>;

  constructor(private vehicleService: VehiculoService) { }

  ngOnInit() {
    this.listarVehiculos();
  }

  listarVehiculos(){
    this.vehiculos = this.vehicleService.getVehiculos();
  }

}
