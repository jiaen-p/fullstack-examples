import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDiscoComponent } from './vista-disco.component';

describe('VistaDiscoComponent', () => {
  let component: VistaDiscoComponent;
  let fixture: ComponentFixture<VistaDiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
