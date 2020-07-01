import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNuevoComponent } from './vista-nuevo.component';

describe('VistaNuevoComponent', () => {
  let component: VistaNuevoComponent;
  let fixture: ComponentFixture<VistaNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
