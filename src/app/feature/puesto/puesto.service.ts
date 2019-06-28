import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  private baseUrl:string='http://localhost:8082/puesto';

  constructor(private http:HttpClient) { }

  getPuestos():Observable<any>{
    return this.http.get(this.baseUrl+'/listar-puestos');
 }

 getPuestosLibres():Observable<any>{
   return this.http.get(this.baseUrl+'/listado-puestos-libres');
 }
}
