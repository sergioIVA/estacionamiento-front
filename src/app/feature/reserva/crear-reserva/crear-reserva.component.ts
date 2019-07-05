import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/shared/models/vehiculo';
import { Observable } from 'rxjs';
import { VehiculoService } from '../../vehiculo/vehiculo.service';
import { PuestoService } from '../../puesto/puesto.service';
import { Puesto } from 'src/app/shared/models/puesto';
import { ReservaService } from '../reserva.service';
import { Reserva } from 'src/app/shared/models/reserva';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

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
   reserva:Reserva;
   
  

  
  constructor(private vehiculoService: VehiculoService,
              private puestoService:PuestoService,
              private reservaService:ReservaService,
              private authService:AuthService,
              private router: Router) { }

  ngOnInit() {

    if (this.authService.token == null) {
      this.authService.IniciarSession().subscribe(response => {
        this.authService.guardarToken(response.access_token);
      }, err => {
        if (err.status == 400) {
          alert('Error Login, Usuario o clave incorrectas!');
        }
      }
      );
    } 

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


  ReservarVehiculo():void{
      
      let now = new Date();
      this.reserva=new Reserva();
      this.reserva.fechaIngreso=now;
      this.reserva.puesto=this.puestoSelec;
      this.reserva.vehiculo=this.vehiculoSelec;


      this.reservaService.registrarReserva(this.reserva)
                         .subscribe(
                          reservaRegistrada=>{
                            this.reserva=reservaRegistrada;
                            this.submit=false;
                            this.router.navigate(['/listarReservasPendientes'])
                          }, 
                          error=> {
                            this.apiError=false;
                            this.apiErrorMessage=error.error.message;
                          }  
                         );
                          
  }


}
