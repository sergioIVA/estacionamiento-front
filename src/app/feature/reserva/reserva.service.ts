import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/shared/models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private baseUrl: string = 'http://localhost:8082/reserva';

  constructor(private http:HttpClient) { }



  registrarReserva(reserva:Reserva):Observable<any>{
    return this.http.post(this.baseUrl,reserva);
  }

  listarReservasActivas():Observable<any>{
     return  this.http.get(this.baseUrl+'/listar-reservas-pendientes');
  }

  registrarSalidaReserva(reserva:Reserva):Observable<any>{
      return this.http.patch(this.baseUrl+'/'+reserva.idReserva,reserva);
  }

  listarReservas():Observable<any>{
     return this.http.get(this.baseUrl+'/listar-reservas');
  }





}
