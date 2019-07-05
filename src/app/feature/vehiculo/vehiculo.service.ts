import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/shared/models/vehiculo';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private baseUrl: string = 'http://localhost:8762/vehiculo';

  constructor(private http:HttpClient,private authService:AuthService) { }

  getVehiculos():Observable<Vehiculo[]>{
      return this.http.get<Vehiculo[]>(this.baseUrl+'/listado-vehiculos',{headers:this.authService.agregarAuthorizationHeader()});
  }

  postVehiculo(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>(this.baseUrl,vehiculo,{headers:this.authService.agregarAuthorizationHeader()});
  }

  
}
