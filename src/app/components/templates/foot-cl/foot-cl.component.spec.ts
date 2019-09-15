import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootClComponent } from './foot-cl.component';

describe('FootClComponent', () => {
  let component: FootClComponent;
  let fixture: ComponentFixture<FootClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
