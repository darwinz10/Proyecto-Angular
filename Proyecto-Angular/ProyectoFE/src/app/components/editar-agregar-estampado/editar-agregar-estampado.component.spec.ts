import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgregarEstampadoComponent } from './editar-agregar-estampado.component';

describe('EditarAgregarEstampadoComponent', () => {
  let component: EditarAgregarEstampadoComponent;
  let fixture: ComponentFixture<EditarAgregarEstampadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAgregarEstampadoComponent]
    });
    fixture = TestBed.createComponent(EditarAgregarEstampadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
