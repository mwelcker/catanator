import {Injectable} from '@angular/core';
import {Board} from '../model/board';
import {Field} from '../model/field';
import {Resource, resources} from '../model/resource';

@Injectable({
    providedIn: 'root'
})
export class MapGeneratorService {

    constructor() {
    }

    generateMapByPreset(presetId: string): Board {
        const board = new Board();
        const preset = JSON.parse(JSON.stringify(PRESETS[presetId]));

        if (!preset) {
            throw Error('Preset id not found');
        }
        for (const field of this.shuffle(preset.fields)) {
            if (field.water) {
                board.fields.push(new Field(field.x, field.y, resources.water, -1));
            } else {
                const availResourceFields = preset.resources.filter(res => res.count >= 1);
                if (availResourceFields.length >= 1) {
                    availResourceFields[0].count--;
                    board.fields.push(new Field(field.x, field.y, resources[availResourceFields[0].resource.name]));
                }
            }
        }
        console.log(PRESETS);
        return board;

    }

    generateBySize(xLength: number, yLength: number): Board {
        const board = new Board();
        board.fields = [];
        for (const x of Array(xLength).keys()) {
            for (const y of Array(yLength * 2 - 1).keys()) {
                if ((x + y) % 2 === 0) {
                    board.fields.push(new Field(x, y, resources.water));
                }
            }
        }
        return board;
    }


    shuffle(array: any[]): any[] {
        let counter = array.length;
        while (counter > 0) {
            const index = Math.floor(Math.random() * counter);
            counter--;
            const temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

}


interface Preset {

    resources: { count: number, resource: Resource }[];
    fields: {
        x: number;
        y: number;
        water?: boolean;
    }[];
}

const PRESETS: { [key: string]: Preset } = {
    standard: {
        resources: [
            {resource: resources.desert, count: 1},
            {resource: resources.clay, count: 3},
            {resource: resources.forest, count: 4},
            {resource: resources.sheep, count: 4},
            {resource: resources.field, count: 4},
            {resource: resources.mountain, count: 3},
        ],
        fields:
            [
                {x: 0, y: 4, water: true},
                {x: 0, y: 6, water: true},
                {x: 0, y: 8, water: true},
                {x: 0, y: 10, water: true},
                {x: 1, y: 3, water: true},
                {x: 1, y: 5},
                {x: 1, y: 7},
                {x: 1, y: 9},
                {x: 1, y: 11, water: true},
                {x: 2, y: 2, water: true},
                {x: 2, y: 4},
                {x: 2, y: 6},
                {x: 2, y: 8},
                {x: 2, y: 10},
                {x: 2, y: 12, water: true},
                {x: 3, y: 1, water: true},
                {x: 3, y: 3},
                {x: 3, y: 5},
                {x: 3, y: 7},
                {x: 3, y: 9},
                {x: 3, y: 11},
                {x: 3, y: 13, water: true},
                {x: 4, y: 2, water: true},
                {x: 4, y: 4},
                {x: 4, y: 6},
                {x: 4, y: 8},
                {x: 4, y: 10},
                {x: 4, y: 12, water: true},
                {x: 5, y: 3, water: true},
                {x: 5, y: 5},
                {x: 5, y: 7},
                {x: 5, y: 9},
                {x: 5, y: 11, water: true},
                {x: 6, y: 4, water: true},
                {x: 6, y: 6, water: true},
                {x: 6, y: 8, water: true},
                {x: 6, y: 10, water: true}]
    }

};
