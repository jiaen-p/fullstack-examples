import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaClaseComponent } from './vista-clase.component';

describe('VistaClaseComponent', () => {
  let component: VistaClaseComponent;
  let fixture: ComponentFixture<VistaClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
