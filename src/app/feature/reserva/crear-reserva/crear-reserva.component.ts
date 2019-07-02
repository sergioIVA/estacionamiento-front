import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/shared/models/vehiculo';
import { Observable } from 'rxjs';
import { VehiculoService } from '../../vehiculo/vehiculo.service';
import { PuestoService } from '../../puesto/puesto.service';
import { Puesto } from 'src/app/shared/models/puesto';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {


   vehiculoSelec:Vehiculo;
   puestoSelec:Puesto;
   vehiculos:Vehiculo[];
   puestos:Puesto[];
   submit:boolean=true;
   apiError:boolean=true;
   apiErrorMessage:string='';
   sergito:any;

  
  constructor(private vehiculoService: VehiculoService,private puestoService:PuestoService) { }

  ngOnInit() {
    this.listarPuestos();
    this.listarVehiculos();
  }

  listarVehiculos():void{
    this.vehiculoService.getVehiculos()
                      .subscribe(
                        ListaVehiculos=>this.vehiculos=ListaVehiculos as Vehiculo[],
                        error=> {
                          this.apiError=false;
                          this.apiErrorMessage=error.error.message;
                        }
                        );
  }




  listarPuestos():void{
    this.puestoService.getPuestos()
                      .subscribe(
                        Listapuestos=>this.puestos=Listapuestos as Puesto[],
                        error=> {
                          this.apiError=false;
                          this.apiErrorMessage=error.error.message;
                        }
                        );
  }


  onSelectVehiculo(e):void{
      console.log(this.vehiculoSelec);
  }
 
  onSelectPuesto(e):void{
     console.log(this.puestoSelec);
  }


}
