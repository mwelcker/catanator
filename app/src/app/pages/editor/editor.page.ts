import {Component, OnInit} from '@angular/core';
import {Board} from '../../model/board';
import {MapGeneratorService} from '../../services/map-generator.service';
import {PopoverController} from '@ionic/angular';
import {FieldEditComponent} from "./field-edit/field-edit.component";
import {Field} from "../../model/field";

@Component({
    selector: 'app-editor',
    templateUrl: './editor.page.html',
    styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {
    public board: Board;

    constructor(public popoverController: PopoverController,
                private mapService: MapGeneratorService
    ) {
        this.generateRandom();
    }

    _width = 5;

    get width() {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
        this.generateRandom();
    }

    _height = 5;
    newMap: boolean = true;

    get height() {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
        this.generateRandom();
    }

    ngOnInit() {
    }

    async presentPopover(ev: Field) {
        this.newMap = false;
        const popover = await this.popoverController.create({
            component: FieldEditComponent,
            componentProps: {field: ev},
            translucent: false
        });
        return await popover.present();
    }

    generateRandom() {
        this.board = this.mapService.generateBySize(this.width, this.height, false);
    }

}
