import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FieldEditModalPage} from './field-edit-modal.page';

describe('FieldEditModalPage', () => {
    let component: FieldEditModalPage;
    let fixture: ComponentFixture<FieldEditModalPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FieldEditModalPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FieldEditModalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
