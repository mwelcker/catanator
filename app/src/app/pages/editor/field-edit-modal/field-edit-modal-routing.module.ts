import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldEditModalPage} from './field-edit-modal.page';

const routes: Routes = [
    {
        path: '',
        component: FieldEditModalPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldEditModalPageRoutingModule {
}
