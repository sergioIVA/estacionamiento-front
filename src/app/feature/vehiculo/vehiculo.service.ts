import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/shared/models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private baseUrl: string = 'http://localhost:8082/vehiculo';

  constructor(private http:HttpClient) { }

  getVehiculos():Observable<any>{
      return this.http.get(this.baseUrl+'/listado-vehiculos');
  }

  postVehiculo(vehiculo:Vehiculo):Observable<Object>{
    return this.http.post(this.baseUrl,vehiculo);
  }

  
}
