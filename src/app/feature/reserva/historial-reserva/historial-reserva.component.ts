import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { Reserva } from 'src/app/shared/models/reserva';


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

  constructor(private reservaService:ReservaService) { }

  ngOnInit() {
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
