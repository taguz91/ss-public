import { TestBed } from '@angular/core/testing';

import { FilterVendedorService } from './filter-vendedor.service';

describe('FilterVendedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterVendedorService = TestBed.get(FilterVendedorService);
    expect(service).toBeTruthy();
  });
});
