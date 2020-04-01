import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EditorPageRoutingModule} from './editor-routing.module';

import {EditorPage} from './editor.page';
import {SharedModule} from '../../shared/shared.module';
import {FieldEditModalPage} from './field-edit-modal/field-edit-modal.page';
import {FieldEditModalPageModule} from './field-edit-modal/field-edit-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditorPageRoutingModule,
        SharedModule,
        FieldEditModalPageModule
    ],
    declarations: [EditorPage],
    entryComponents: [FieldEditModalPage
    ]
})
export class EditorPageModule {
}
