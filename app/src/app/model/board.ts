import {Field} from './field';
import {resources} from './resource';

export interface BoardRating {
    sum: number;
    chips?: { dice: number, count: number }[];
}

export const FIELD_RATINGS = [
    {dice: 2, rating: 1},
    {dice: 12, rating: 1},
    {dice: 3, rating: 2},
    {dice: 11, rating: 2},
    {dice: 4, rating: 3},
    {dice: 10, rating: 3},
    {dice: 5, rating: 4},
    {dice: 9, rating: 4},
    {dice: 6, rating: 5},
    {dice: 8, rating: 5}
];

const DIRECTION_TO_COORDINATES_OFFSET = {
    0: {x: 0, y: -2},
    1: {x: 1, y: -1},
    2: {x: 1, y: 1},
    3: {x: 0, y: 2},
    4: {x: -1, y: 1},
    5: {x: -1, y: -1},
};

export class Board {
    _fields: Field[] = [];
    size: {
        x: number,
        y: number
    };


    constructor() {
    }

    set fields(fields: Field[]) {
        this._fields = fields;
    }

    get fields(): Field[] {
        this.size = {
            x: Math.max.apply(Math, this._fields.map(field => field.x)),
            y: Math.max.apply(Math, this._fields.map(field => field.y))
        };
        return this._fields;
    }

    getNeighbours(field: Field): Field[] {
        console.log(`neighbours for field x:${field.x}, y:${field.y}`);
        const neighbours: Field[] = [];
        [0, 1, 2, 3, 4, 5].forEach(direction =>
            neighbours.push(this.getNeighbourFieldByDirection(field, direction))
        );
        return neighbours;
    }

    getNeighbourFieldByDirection(field: Field, direction: number): Field {
        const x = field.x + DIRECTION_TO_COORDINATES_OFFSET[direction].x;
        const y = field.y + DIRECTION_TO_COORDINATES_OFFSET[direction].y;
        return this.getFieldByCoordinates(x, y);
    }

    getFieldByCoordinates(x: number, y: number): Field {
        return this.fields.find(field => field.x === x && field.y === y);
    }

    get rating(): BoardRating {

        const fields = this.fields.filter(field => ![resources.water, resources.desert].includes(field.resource));
        const chips = [];
        FIELD_RATINGS.forEach(chipNumbers => {
            chips.push({
                dice: chipNumbers.dice,
                count: fields.filter(field => field.chip === chipNumbers.dice).length
            });
        });
        return {
            sum: fields.map(field => field.chip).reduce((a, b) => a + b, 0),
            chips
        };
    }
}
