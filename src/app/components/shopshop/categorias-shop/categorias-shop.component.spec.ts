import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasShopComponent } from './categorias-shop.component';

describe('CategoriasShopComponent', () => {
  let component: CategoriasShopComponent;
  let fixture: ComponentFixture<CategoriasShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
