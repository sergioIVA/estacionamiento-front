import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/shared/models/reserva';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private baseUrl: string = 'http://localhost:8762/reserva';

  constructor(private http:HttpClient,private authService:AuthService) { }



  registrarReserva(reserva:Reserva):Observable<Reserva>{
    return this.http.post<Reserva>(this.baseUrl,reserva);
  }

  listarReservasActivas():Observable<Reserva[]>{
     return  this.http.get<Reserva[]>(this.baseUrl+'/listar-reservas-pendientes',{headers:this.authService.agregarAuthorizationHeader()});
  }

  registrarSalidaReserva(reserva:Reserva):Observable<Reserva>{
      return this.http.patch<Reserva>(this.baseUrl+'/'+reserva.idReserva,reserva,{headers:this.authService.agregarAuthorizationHeader()});
  }

  listarReservas():Observable<Reserva[]>{
     return this.http.get<Reserva[]>(this.baseUrl+'/listar-reservas',{headers:this.authService.agregarAuthorizationHeader()});
  }





}
