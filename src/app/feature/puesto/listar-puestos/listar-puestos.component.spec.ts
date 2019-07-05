import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPuestosComponent } from './listar-puestos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('ListarPuestosComponent', () => {
  let component: ListarPuestosComponent;
  let fixture: ComponentFixture<ListarPuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule, FormsModule],
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
