import { asyncData, asyncError } from '../../../testing/async-observable-helpers';
import { AuthService } from '../auth/auth.service';
import { ReservaService } from './reserva.service';
import { Reserva } from 'src/app/shared/models/reserva';
import { Vehiculo } from 'src/app/shared/models/vehiculo';
import { Puesto } from 'src/app/shared/models/puesto';


class MockAuthService extends AuthService{
  token:string;
}

describe('ReservaService', () => {

  let httpClientSpy: { get: jasmine.Spy,post: jasmine.Spy,patch: jasmine.Spy  };
  let reservaService:ReservaService;
  

  beforeEach(() =>{
    
    
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post','patch']);
    reservaService=new ReservaService(<any>httpClientSpy,
      new MockAuthService(jasmine.createSpyObj('HttpClient', ['get','post','patch'])));
     });
    
    

     it('debería retornar la lista de reservas', () => {
      const expectedReservas: Reserva[] =
        [{  idReserva: 1, fechaIngreso: new Date(), fechaRetiro:null,valorTotal: 1000,
          vehiculo:{  idVehiculo: 1, placa: 'AXRTE',  cilindraje:'550',tipoVehiculo: 
          {idTipoVehiculo:1,nombre:'Carro'}},puesto:{  idPuesto: 1, tipoPuestoVehiculo: 'Carro', estado: true }
        },
        {idReserva: 2, fechaIngreso: new Date(), fechaRetiro:null,valorTotal: 1000,
          vehiculo: {  idVehiculo: 2, placa: 'XDERT',  cilindraje:'500',tipoVehiculo:  
          {idTipoVehiculo:2,nombre:'Moto'}},puesto:{  idPuesto: 2, tipoPuestoVehiculo: 'Moto', estado: true }
        },
        {idReserva: 3, fechaIngreso: new Date(), fechaRetiro:new Date(),valorTotal: 1000,
        vehiculo:{  idVehiculo: 3, placa: 'SAWDFT',  cilindraje:'200',tipoVehiculo:{idTipoVehiculo:1,nombre:'Carro'}},
        puesto:{  idPuesto: 2, tipoPuestoVehiculo: 'Moto', estado: true }
        },
        ];
  
        httpClientSpy.get.and.returnValue(asyncData(expectedReservas));
  
        reservaService.listarReservas().subscribe(
         reservas => expect(reservas).toEqual(expectedReservas, 'reservas esperadas'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada');
    });


    it('debería retornar la lista de reservas activas', () => {
      const expectedReservas: Reserva[] =
      [{  idReserva: 1, fechaIngreso: new Date(), fechaRetiro:null,valorTotal: 1000,
        vehiculo:{  idVehiculo: 1, placa: 'AXRTE',  cilindraje:'550',tipoVehiculo: 
        {idTipoVehiculo:1,nombre:'Carro'}},puesto:{  idPuesto: 1, tipoPuestoVehiculo: 'Carro', estado: true }
      },
      {idReserva: 2, fechaIngreso: new Date(), fechaRetiro:null,valorTotal: 1000,
        vehiculo: {  idVehiculo: 2, placa: 'XDERT',  cilindraje:'500',tipoVehiculo:  
        {idTipoVehiculo:2,nombre:'Moto'}},puesto:{  idPuesto: 2, tipoPuestoVehiculo: 'Moto', estado: true }
      },
      {idReserva: 3, fechaIngreso: new Date(), fechaRetiro:new Date(),valorTotal: 1000,
      vehiculo:{  idVehiculo: 3, placa: 'SAWDFT',  cilindraje:'200',tipoVehiculo:{idTipoVehiculo:1,nombre:'Carro'}},
      puesto:{  idPuesto: 2, tipoPuestoVehiculo: 'Carro', estado: true }
      },
      ];

  
        httpClientSpy.get.and.returnValue(asyncData(expectedReservas));
  
        reservaService.listarReservasActivas().subscribe(
         reservas => expect(reservas).toEqual(expectedReservas, 'reservas activas esperadas esperadas'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada');
    });


    it('debería retornar la reserva que se registro', () => {

      const expectedReserva: Reserva =
      {  idReserva: 1, fechaIngreso: new Date(), fechaRetiro:null,valorTotal: 1000,
        vehiculo:{  idVehiculo: 1, placa: 'AXRTE',  cilindraje:'550',tipoVehiculo: 
        {idTipoVehiculo:1,nombre:'Carro'}},puesto:{  idPuesto: 1, tipoPuestoVehiculo: 'Carro', estado: true }
      };
  
        httpClientSpy.post.and.returnValue(asyncData(expectedReserva));
  
        reservaService.registrarReserva(expectedReserva).subscribe(
         reservas => expect(reservas).toEqual(expectedReserva, 'reserva esperada'),
        fail
      );
      expect(httpClientSpy.post.calls.count()).toBe(1, 'una llamada');
    });


    it('debería retornar la reserva  a la cual se le realizo la salida del vehiculo', () => {

      const expectedReserva: Reserva =
      {  idReserva: 1, fechaIngreso: new Date(), fechaRetiro:new Date(),valorTotal: 1000,
        vehiculo:{  idVehiculo: 1, placa: 'AXRTE',  cilindraje:'550',tipoVehiculo: 
        {idTipoVehiculo:1,nombre:'Carro'}},puesto:{  idPuesto: 1, tipoPuestoVehiculo: 'Carro', estado: false}
      };
  
        httpClientSpy.patch.and.returnValue(asyncData(expectedReserva));
  
        reservaService.registrarSalidaReserva(expectedReserva).subscribe(
         reservas => expect(reservas).toEqual(expectedReserva, 'reserva finalizada'),
        fail
      );
      expect(httpClientSpy.patch.calls.count()).toBe(1, 'una llamada');
    });


  
  
  });

  
 


