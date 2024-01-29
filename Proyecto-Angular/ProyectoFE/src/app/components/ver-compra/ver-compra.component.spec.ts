import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCompraComponent } from './ver-compra.component';

describe('VerCompraComponent', () => {
  let component: VerCompraComponent;
  let fixture: ComponentFixture<VerCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCompraComponent]
    });
    fixture = TestBed.createComponent(VerCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
