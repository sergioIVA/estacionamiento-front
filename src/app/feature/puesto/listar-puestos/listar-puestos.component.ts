import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/shared/models/puesto';
import { Observable } from 'rxjs';
import { PuestoService } from '../puesto.service';

@Component({
  selector: 'app-listar-puestos',
  templateUrl: './listar-puestos.component.html',
  styleUrls: ['./listar-puestos.component.css']
})
export class ListarPuestosComponent implements OnInit {

  puestos:Observable<Puesto[]>;

  constructor(private puestoService:PuestoService) { }

  ngOnInit() {
    this.listarPuestos();
  }

  listarPuestos():void{
    this.puestos=this.puestoService.getPuestos();
 }

}