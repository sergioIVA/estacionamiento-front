import { Vehiculo } from './vehiculo';
import { Puesto } from './puesto';

export class Reserva {
    
    idReserva:bigint;
	fechaIngreso:Date;
	fechaRetiro:Date;
	valorTotal:number;
	vehiculo:Vehiculo;
    puesto:Puesto;
    
 constructor(){} 
  
   
}
