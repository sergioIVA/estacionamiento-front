import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/shared/models/vehiculo';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {


  vehiculo:Vehiculo=new Vehiculo();
  submit:boolean=true;
  apiError:boolean=true;
  apiErrorMessage:string='';

  constructor(private vehiculoService:VehiculoService,private router: Router) { }

  ngOnInit() {
  }

  nuevoVehiculo():void{
    this.submit=true;
  }

  guardarVehiculo(){
  this.vehiculoService.postVehiculo(this.vehiculo).subscribe(
      data=>{
        this.submit=false
        this.router.navigate(['/vehiculos'])
      },
      error=> {
        this.apiError=false;
        this.apiErrorMessage=error.error.message;
      }
    );
    this.vehiculo=new Vehiculo();
  }

  onSubmit(){
    this.guardarVehiculo();
  }

}
