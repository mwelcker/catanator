import {Component, OnInit} from '@angular/core';
import {Board} from '../model/board';
import {MapGeneratorService, PRESETS} from '../services/map-generator.service';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.page.html',
    styleUrls: ['./generator.page.scss'],
})
export class GeneratorPage implements OnInit {

    public board: Board;
    public presets = PRESETS;
    playerCount = 4;
    selectedPresetId: string = this.presets[0].id;

    constructor(private mapService: MapGeneratorService) {
        this.generate();
    }

    ngOnInit() {
    }

    generate() {
        this.board = this.mapService.generateMapByPreset(this.selectedPresetId);
    }

}
