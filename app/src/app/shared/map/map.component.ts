import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../model/field';
import {Board} from '../../model/board';
import {resources} from '../../model/resource';
import {MapGeneratorService} from '../../services/map-generator.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {

    heightOffset = 173;
    widthOffset = 150;
    resources = resources;

    @Input() board: Board;
    @Output() fieldClick = new EventEmitter();
    @Input() generatorMode = false;
    @Input() analyseMode = false;
    selectedField: Field;
    highlightedFields: Field[] = [];

    constructor(private mapService: MapGeneratorService) {
        this.board = this.mapService.generateMapByPreset('standard');
        this.selectedField = this.board.fields[0];

    }

    ngAfterViewInit() {

    }

    selectField(field: Field) {
        this.fieldClick.emit(field);
        this.selectedField = field;
    }

    ngOnInit() {
    }

    isHighlighted(field: Field) {
        return this.highlightedFields.includes(field);
    }
}
