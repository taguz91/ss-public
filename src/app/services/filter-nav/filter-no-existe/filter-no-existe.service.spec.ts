import { TestBed } from '@angular/core/testing';

import { FilterNoExisteService } from './filter-no-existe.service';

describe('FilterNoExisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterNoExisteService = TestBed.get(FilterNoExisteService);
    expect(service).toBeTruthy();
  });
});
