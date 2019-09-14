import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRecomComponent } from './producto-recom.component';

describe('ProductoRecomComponent', () => {
  let component: ProductoRecomComponent;
  let fixture: ComponentFixture<ProductoRecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoRecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
