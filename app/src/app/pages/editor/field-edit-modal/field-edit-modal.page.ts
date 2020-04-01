import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../../model/field';
import {NavParams} from '@ionic/angular';
import {resources} from '../../../model/resource';

@Component({
    selector: 'app-field-edit-modal',
    templateUrl: './field-edit-modal.page.html',
    styleUrls: ['./field-edit-modal.page.scss'],
})
export class FieldEditModalPage implements OnInit {

    @Input() field: Field;
    resources = resources;

    constructor(navParams: NavParams) {
        console.log(navParams.get('field'));
    }

    ngOnInit() {
    }

}
