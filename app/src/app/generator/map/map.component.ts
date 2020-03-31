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
    selectedField: Field;
    highlightedFields: Field[] = [];


    constructor(private mapService: MapGeneratorService) {
        this.generate();
        this.selectedField = this.board.fields[0];
    }

    selectField(field: Field) {
        this.selectedField = field;
    }

    ngOnInit() {
    }


    removeElem(field: Field) {
    }

    generate() {
        this.board = this.mapService.generateMapByPreset('standard');
        // this.board = this.mapService.generateBySize(this.fieldSize.x, this.fieldSize.y);

    }

    generateRandom(x: number, y: number) {
        this.board = this.mapService.generateBySize(x, y);
    }

    isHighlighted(field: Field) {
        return this.highlightedFields.includes(field);
    }
}
