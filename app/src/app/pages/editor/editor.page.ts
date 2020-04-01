import {Component, OnInit} from '@angular/core';
import {Board} from '../../model/board';
import {MapGeneratorService} from '../../services/map-generator.service';
import {ModalController} from '@ionic/angular';
import {FieldEditModalPage} from './field-edit-modal/field-edit-modal.page';
import {Field} from '../../model/field';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.page.html',
    styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {
    public board: Board;

    constructor(private mapService: MapGeneratorService, public modalController: ModalController) {
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

    get height() {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
        this.generateRandom();
    }

    ngOnInit() {
    }

    async presentModal(field: Field) {
        const modal = await this.modalController.create({
            component: FieldEditModalPage,
            componentProps: {
                field,
            }
        });
        return await modal.present();
    }

    generateRandom() {
        this.board = this.mapService.generateBySize(this.width, this.height, false);
    }

}
