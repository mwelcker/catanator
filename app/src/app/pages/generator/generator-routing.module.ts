import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GeneratorPage} from './generator.page';

const routes: Routes = [
    {
        path: '',
        component: GeneratorPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GeneratorPageRoutingModule {
}
