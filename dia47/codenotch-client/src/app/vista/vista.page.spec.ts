import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistaPage } from './vista.page';

describe('VistaPage', () => {
  let component: VistaPage;
  let fixture: ComponentFixture<VistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
