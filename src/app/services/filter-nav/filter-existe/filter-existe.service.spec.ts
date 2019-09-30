import { TestBed } from '@angular/core/testing';

import { FilterExisteService } from './filter-existe.service';

describe('FilterExisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterExisteService = TestBed.get(FilterExisteService);
    expect(service).toBeTruthy();
  });
});
