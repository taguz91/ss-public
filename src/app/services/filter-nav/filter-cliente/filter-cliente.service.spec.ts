import { TestBed } from '@angular/core/testing';

import { FilterClienteService } from './filter-cliente.service';

describe('FilterClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterClienteService = TestBed.get(FilterClienteService);
    expect(service).toBeTruthy();
  });
});
