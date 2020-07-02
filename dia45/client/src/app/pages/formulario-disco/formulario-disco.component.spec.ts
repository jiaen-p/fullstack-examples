import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDiscoComponent } from './formulario-disco.component';

describe('FormularioDiscoComponent', () => {
  let component: FormularioDiscoComponent;
  let fixture: ComponentFixture<FormularioDiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
