import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { Reserva } from 'src/app/shared/models/reserva';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reservas-pendientes',
  templateUrl: './listar-reservas-pendientes.component.html',
  styleUrls: ['./listar-reservas-pendientes.component.css']
})
export class ListarReservasPendientesComponent implements OnInit {

   submit:boolean=true;
   apiError:boolean=true;
   apiErrorMessage:string='';
   reservas:Reserva[];
   reservaFinalizada:Reserva;

  

  constructor(private reservaService:ReservaService,
              private authService:AuthService,
              private router:Router) { }

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

    this.reservaFinalizada=new Reserva();
    this.listarReservaActivas();
  }

  listarReservaActivas():void{
     this.reservaService.listarReservasActivas()
                        .subscribe(
                          listaReservas=>this.reservas=listaReservas,
                          error=> {
                            this.apiError=false;
                            this.apiErrorMessage=error.error.message;
                          }
                        );
  }

  registrarSalidaReserva(reserva:Reserva):void{
      this.reservaService.registrarSalidaReserva(reserva)
                         .subscribe(
                          reservaFinal=>this.reservaFinalizada=reservaFinal as Reserva,
                          error=> {
                            this.apiError=false;
                            this.apiErrorMessage=error.error.message;
                          }

                          );
      console.log(this.reservaFinalizada);                     
  }
  
  cargarListaReservarPendientes():void{
     console.log("Se ejecuto la funcion cargarListaReservarPendientes");
    this.router.navigate(['/listarReservasPendiente'])
  }
  

}
