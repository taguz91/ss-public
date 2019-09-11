import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoShopComponent } from './producto-shop.component';

describe('ProductoShopComponent', () => {
  let component: ProductoShopComponent;
  let fixture: ComponentFixture<ProductoShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
