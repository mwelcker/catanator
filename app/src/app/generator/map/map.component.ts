import {Component, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {Board} from '../../model/board';
import {MapGeneratorService} from '../../services/map-generator.service';
import {resources} from '../../model/resource';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

    heightOffset = 173;
    widthOffset = 150;

    resources = resources;

    board: Board;
    openOptions: boolean = false;


    constructor(private mapService: MapGeneratorService) {
        this.generate();
    }

    ngOnInit() {
    }


    removeElem(field: Field) {
    }

    generate() {
        this.board = this.mapService.generateMapByPreset('standard');
        // this.board = this.mapService.generateBySize(this.fieldSize.x, this.fieldSize.y);

    }
}
