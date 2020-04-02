import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../model/field";
import {NavParams} from "@ionic/angular";
import {Resource, resources} from "../../../model/resource";

@Component({
    selector: 'app-field-edit',
    templateUrl: './field-edit.component.html',
    styleUrls: ['./field-edit.component.scss'],
})
export class FieldEditComponent implements OnInit {

    field: Field;
    resources = resources;
    objectKeys = Object.keys;

    constructor(public navParams: NavParams) {
        this.field = this.navParams.get('field');
    }

    ngOnInit() {
    }

    setChip(chip?: number) {
        if (!chip && chip === this.field.chip) {
            delete this.field.chip
        }
        this.field.chip = chip

    }

    setResource(resource: Resource) {
        if (['water', 'desert', 'none'].includes(resource.name)) {
            delete this.field.chip
        }

        this.field.resource = resource;
    }
}
