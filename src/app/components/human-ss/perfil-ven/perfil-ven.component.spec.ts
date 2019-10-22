import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVenComponent } from './perfil-ven.component';

describe('PerfilVenComponent', () => {
  let component: PerfilVenComponent;
  let fixture: ComponentFixture<PerfilVenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilVenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilVenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
