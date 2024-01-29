import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgregarCompraComponent } from './editar-agregar-compra.component';

describe('EditarAgregarCompraComponent', () => {
  let component: EditarAgregarCompraComponent;
  let fixture: ComponentFixture<EditarAgregarCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAgregarCompraComponent]
    });
    fixture = TestBed.createComponent(EditarAgregarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
