import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPuestosComponent } from './listar-puestos.component';

describe('ListarPuestosComponent', () => {
  let component: ListarPuestosComponent;
  let fixture: ComponentFixture<ListarPuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
