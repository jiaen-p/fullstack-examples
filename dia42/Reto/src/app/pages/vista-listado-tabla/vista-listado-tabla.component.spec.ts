import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaListadoTablaComponent } from './vista-listado-tabla.component';

describe('VistaListadoTablaComponent', () => {
  let component: VistaListadoTablaComponent;
  let fixture: ComponentFixture<VistaListadoTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaListadoTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaListadoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
