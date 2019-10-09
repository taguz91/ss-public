import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVenComponent } from './home-ven.component';

describe('HomeVenComponent', () => {
  let component: HomeVenComponent;
  let fixture: ComponentFixture<HomeVenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
