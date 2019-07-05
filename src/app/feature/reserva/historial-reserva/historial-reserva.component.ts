import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { Reserva } from 'src/app/shared/models/reserva';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.component.html',
  styleUrls: ['./historial-reserva.component.css']
})
export class HistorialReservaComponent implements OnInit {

   submit:boolean=true;
   apiError:boolean=true;
   apiErrorMessage:string='';
   reservas:Reserva[];

  constructor(private reservaService:ReservaService,private authService:AuthService) { }

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

    this.listarHistorialReservas();
  }

  listarHistorialReservas(){
     this.reservaService.listarReservas()
                        .subscribe(
                          listaReservas=>this.reservas=listaReservas,
                          error=> {
                            this.apiError=false;
                            this.apiErrorMessage=error.error.message;
                          }
                          );
  }

}
