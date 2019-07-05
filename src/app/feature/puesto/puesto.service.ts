import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Puesto } from 'src/app/shared/models/puesto';


@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  private baseUrl:string='http://localhost:8762/puesto';
  

  constructor(private http:HttpClient,private authService:AuthService) { }

  

  getPuestos():Observable<Puesto[]>{
    return this.http.get<Puesto[]>(this.baseUrl+'/listar-puestos',{headers:this.authService.agregarAuthorizationHeader()});
 }

 getPuestosLibres():Observable<Puesto[]>{
   return this.http.get<Puesto[]>(this.baseUrl+'/listado-puestos-libres',{headers:this.authService.agregarAuthorizationHeader()});
 }
}
