import { TestBed } from '@angular/core/testing';

import { ProductoCategoriaService } from './producto-categoria.service';

describe('ProductoCategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoCategoriaService = TestBed.get(ProductoCategoriaService);
    expect(service).toBeTruthy();
  });
});
