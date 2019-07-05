import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialReservaComponent } from './historial-reserva.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('HistorialReservaComponent', () => {
  let component: HistorialReservaComponent;
  let fixture: ComponentFixture<HistorialReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule, FormsModule],
      declarations: [ HistorialReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   
    it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  
});
