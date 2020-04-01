import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {PresetsFilterPipe} from "../presets-filter.pipe";


@NgModule({
    declarations: [
        MapComponent,
        PresetsFilterPipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [MapComponent,
        PresetsFilterPipe]
})
export class SharedModule {
}
