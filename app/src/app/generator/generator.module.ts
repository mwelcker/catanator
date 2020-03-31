import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GeneratorPageRoutingModule} from './generator-routing.module';

import {GeneratorPage} from './generator.page';
import {MapComponent} from './map/map.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GeneratorPageRoutingModule
    ],
    declarations: [GeneratorPage, MapComponent]
})
export class GeneratorPageModule {
}
