import { TestBed } from '@angular/core/testing';

import { CiudadesServiceService } from './ciudades-service.service';

describe('CiudadesServiceService', () => {
  let service: CiudadesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
