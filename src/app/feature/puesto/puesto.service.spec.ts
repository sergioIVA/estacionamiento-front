import { asyncData, asyncError } from '../../../testing/async-observable-helpers';
import { PuestoService } from './puesto.service';
import { AuthService } from '../auth/auth.service';
import { Puesto } from 'src/app/shared/models/puesto';

class MockAuthService extends AuthService{
  token:string;
}

describe('PuestoService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let puestoService:PuestoService;
  


  beforeEach(() => {

     // TODO: spy on other methods too
     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
     puestoService=new PuestoService(<any>httpClientSpy,
      new MockAuthService(jasmine.createSpyObj('HttpClient',['get'])));
     });
    
     
  it('debería retornar la lista de puestos', () => {
    const expectedPuestos: Puesto[] =
      [{  idPuesto: 1, tipoPuestoVehiculo: 'Moto', estado: false },
      {  idPuesto: 2, tipoPuestoVehiculo: 'Carro', estado: true }];

      httpClientSpy.get.and.returnValue(asyncData(expectedPuestos));

      puestoService.getPuestos().subscribe(
       puestos => expect(puestos).toEqual(expectedPuestos, 'puestos esperados'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada');
  });

  it('debería retornar los puestos libres', () => {
    const expectedPuestos: Puesto[] =
      [{  idPuesto: 1, tipoPuestoVehiculo: 'Moto', estado: true },
      {  idPuesto: 2, tipoPuestoVehiculo: 'Carro', estado: true }];

      httpClientSpy.get.and.returnValue(asyncData(expectedPuestos));

      puestoService.getPuestosLibres().subscribe(
       puestos => expect(puestos).toEqual(expectedPuestos, 'puestos libres esperados '),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada');
  });

    
  
  });



 



