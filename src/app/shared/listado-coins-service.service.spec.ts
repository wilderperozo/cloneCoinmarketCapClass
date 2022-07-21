import { TestBed } from '@angular/core/testing';

import { ListadoCoinsServiceService } from './listado-coins-service.service';

describe('ListadoCoinsServiceService', () => {
  let service: ListadoCoinsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoCoinsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
