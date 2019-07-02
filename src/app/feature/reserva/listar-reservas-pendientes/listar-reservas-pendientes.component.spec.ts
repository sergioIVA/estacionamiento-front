import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservasPendientesComponent } from './listar-reservas-pendientes.component';

describe('ListarReservasPendientesComponent', () => {
  let component: ListarReservasPendientesComponent;
  let fixture: ComponentFixture<ListarReservasPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReservasPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
