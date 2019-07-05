import { TipoVehiculo } from './tipo-vehiculo';

export class Vehiculo {
    idVehiculo:number;
    placa:string;
    cilindraje:string;
    tipoVehiculo:TipoVehiculo;

    constructor(){
        this.tipoVehiculo=new TipoVehiculo();
    }


}
