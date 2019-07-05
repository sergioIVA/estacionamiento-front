import { AuthService } from '../auth/auth.service';
import { Vehiculo } from 'src/app/shared/models/vehiculo';
import { VehiculoService } from './vehiculo.service';
import { asyncData, asyncError } from '../../../testing/async-observable-helpers';



class MockAuthService extends AuthService{
  token:string;
}


describe('VehiculoService', () => {

  let httpClientSpy: { get: jasmine.Spy,post: jasmine.Spy,pacth: jasmine.Spy  };
  let vehiculoService:VehiculoService;

  beforeEach(() =>{
    
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post']);
    vehiculoService=new VehiculoService(<any>httpClientSpy,
      new MockAuthService(jasmine.createSpyObj('HttpClient',['get'])));
     });  
 
  
  it('debería retornar la lista de vehiculos', () => {

    const expectedVehiculo: Vehiculo[] =
      [{  idVehiculo: 1, placa: 'AXRTE',  cilindraje:'550',tipoVehiculo: {idTipoVehiculo:1,nombre:'Carro'}},
      {  idVehiculo: 2, placa: 'XDERT',  cilindraje:'500',tipoVehiculo:  {idTipoVehiculo:2,nombre:'Moto'}},
      {  idVehiculo: 3, placa: 'SAWDFT',  cilindraje:'200',tipoVehiculo:{idTipoVehiculo:1,nombre:'Carro'} }
      ];

      httpClientSpy.get.and.returnValue(asyncData(expectedVehiculo));

      vehiculoService.getVehiculos().subscribe(
       vehiculos => expect(vehiculos).toEqual(expectedVehiculo, 'vehiculos esperadas'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada');
  });


  it('debería retornar el vehiculo registrado', () => {

    const expectedVehiculo: Vehiculo ={  idVehiculo: 1, placa: 'AXRTE',  cilindraje:'550',
                                        tipoVehiculo: {idTipoVehiculo:1,nombre:'Carro'}};
     

      httpClientSpy.post.and.returnValue(asyncData(expectedVehiculo));

      vehiculoService.postVehiculo(expectedVehiculo).subscribe(
       vehiculos => expect(vehiculos).toEqual(expectedVehiculo, 'vehiculo esperado'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'una llamada');
  });


  






  
});
