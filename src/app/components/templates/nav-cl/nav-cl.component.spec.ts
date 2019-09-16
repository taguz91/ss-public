import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavClComponent } from './nav-cl.component';

describe('NavClComponent', () => {
  let component: NavClComponent;
  let fixture: ComponentFixture<NavClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
