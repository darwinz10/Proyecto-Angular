import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEstampadoComponent } from './listado-estampado.component';

describe('ListadoEstampadoComponent', () => {
  let component: ListadoEstampadoComponent;
  let fixture: ComponentFixture<ListadoEstampadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoEstampadoComponent]
    });
    fixture = TestBed.createComponent(ListadoEstampadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
