import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVeComponent } from './nav-ve.component';

describe('NavVeComponent', () => {
  let component: NavVeComponent;
  let fixture: ComponentFixture<NavVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
