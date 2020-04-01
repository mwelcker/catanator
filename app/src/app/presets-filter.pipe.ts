import {Pipe, PipeTransform} from '@angular/core';
import {Preset} from "./services/map-generator.service";

@Pipe({
    name: 'presetsFilter'
})
export class PresetsFilterPipe implements PipeTransform {

    transform(presets: Preset[], playerCount: number): Preset[] {
        return presets.filter(preset => preset.players == playerCount);
    }

}
