import { TestBed } from '@angular/core/testing';

import { CarroCompartidoService } from './carro-compartido.service';

describe('CarroCompartidoService', () => {
  let service: CarroCompartidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroCompartidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
