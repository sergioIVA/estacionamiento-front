import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/shared/models/puesto';
import { Observable } from 'rxjs';
import { PuestoService } from '../puesto.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-listar-puestos',
  templateUrl: './listar-puestos.component.html',
  styleUrls: ['./listar-puestos.component.css']
})
export class ListarPuestosComponent implements OnInit {

  puestos:Observable<Puesto[]>;

  constructor(private puestoService:PuestoService,private authService:AuthService) { }

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
  }

  listarPuestos():void{
    this.puestos=this.puestoService.getPuestos();
 }

}