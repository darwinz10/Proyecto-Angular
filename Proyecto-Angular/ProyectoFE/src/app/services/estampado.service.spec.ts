import { TestBed } from '@angular/core/testing';

import { EstampadoService } from './estampado.service';

describe('EstampadoService', () => {
  let service: EstampadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstampadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
