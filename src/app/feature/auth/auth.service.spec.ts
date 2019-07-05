import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { asyncData, asyncError } from '../../../testing/async-observable-helpers';
let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
let authService: AuthService;


describe('AuthService', () => {

  beforeEach(() =>{
    
   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
   authService = new AuthService(<any>httpClientSpy);
    
  
  });

  it('debería devolver el token de autenticacion para seguridad', () => {
    const expectedResponse: any =
      { access_token: '1wrt23s' };

    httpClientSpy.post.and.returnValue(asyncData(expectedResponse));

    authService.IniciarSession().subscribe(
      response => expect(response).toEqual(expectedResponse, 'token esperado'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'Un llamado');
  });

  it('deberia guardar el token correctamente',()=>{
    authService.guardarToken('1ns5w');
    expect(authService.token).toBe('1ns5w');
  })

  it('debe obtener correctamente el token cuando el token no está en el almacenamiento de sesión ni en la variable de instancia',()=>{
    sessionStorage.removeItem('token');
    let res:boolean = authService.token === null;
    expect(res).toBeTruthy;
  })



  
});
