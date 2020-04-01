import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunityPage } from './community.page';

describe('CommunityPage', () => {
  let component: CommunityPage;
  let fixture: ComponentFixture<CommunityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
