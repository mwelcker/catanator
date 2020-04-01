import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FieldEditModalPageRoutingModule} from './field-edit-modal-routing.module';

import {FieldEditModalPage} from './field-edit-modal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FieldEditModalPageRoutingModule
    ],
    declarations: [FieldEditModalPage]
})
export class FieldEditModalPageModule {
}
