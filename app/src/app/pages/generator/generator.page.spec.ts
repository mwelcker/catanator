import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneratorPage } from './generator.page';

describe('GeneratorPage', () => {
  let component: GeneratorPage;
  let fixture: ComponentFixture<GeneratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
