import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstampadoComponent } from './ver-estampado.component';

describe('VerEstampadoComponent', () => {
  let component: VerEstampadoComponent;
  let fixture: ComponentFixture<VerEstampadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEstampadoComponent]
    });
    fixture = TestBed.createComponent(VerEstampadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
