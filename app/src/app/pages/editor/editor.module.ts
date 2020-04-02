import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EditorPageRoutingModule} from './editor-routing.module';

import {EditorPage} from './editor.page';
import {SharedModule} from '../../shared/shared.module';
import {FieldEditComponent} from "./field-edit/field-edit.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditorPageRoutingModule,
        SharedModule
    ],
    declarations: [EditorPage, FieldEditComponent],
    entryComponents: [FieldEditComponent]
})
export class EditorPageModule {
}
