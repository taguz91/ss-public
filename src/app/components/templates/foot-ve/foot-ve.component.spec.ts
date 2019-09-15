import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootVeComponent } from './foot-ve.component';

describe('FootVeComponent', () => {
  let component: FootVeComponent;
  let fixture: ComponentFixture<FootVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
