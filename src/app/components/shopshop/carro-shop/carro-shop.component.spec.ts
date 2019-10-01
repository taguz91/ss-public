import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroShopComponent } from './carro-shop.component';

describe('CarroShopComponent', () => {
  let component: CarroShopComponent;
  let fixture: ComponentFixture<CarroShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
