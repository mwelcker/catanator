import {Field} from './field';
import {resources} from './resource';

export interface BoardRating {
    rating_sum: number;
    chip_sum: number;
    chips?: { dice: number, count: number }[];
    rating_sum_as_schoolmark: number; // between 1-6
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


    getTripleByDirection(field: Field, direction: number): Field[] {
        return [
            field,
            this.getNeighbourFieldByDirection(field, direction),
            this.getNeighbourFieldByDirection(field, direction + 1 === 6 ? 0 : direction + 1), // catch overflow (next direction of 6)
        ];
    }

    // get all possible triplets of one field
    getTriplesOfField(field: Field): Field[][] {
        const result: Field[][] = [];
        [0, 1, 2, 3, 4, 5].forEach(direction => this.getTripleByDirection(field, direction));
        return result;
    }

    getNeighbourFieldByDirection(field: Field, direction: number): Field {
        const x = field.x + DIRECTION_TO_COORDINATES_OFFSET[direction].x;
        const y = field.y + DIRECTION_TO_COORDINATES_OFFSET[direction].y;
        return this.getFieldByCoordinates(x, y);
    }

    getFieldByCoordinates(x: number, y: number): Field {
        return this.fields.find(field => field.x === x && field.y === y);
    }

    getRating(fields: Field[]): BoardRating {
        const fieldsForCalc = fields.filter(field => ![resources.water, resources.desert].includes(field.resource));
        const chips = [];
        FIELD_RATINGS.forEach(chipNumbers => {
            chips.push({
                dice: chipNumbers.dice,
                count: fieldsForCalc.filter(field => field.chip === chipNumbers.dice).length
            });
        });
        return {
            rating_sum: fieldsForCalc.map(field => field.getFieldRating()).reduce((a, b) => a + b, 0),
            chip_sum: fieldsForCalc.map(field => field.chip).reduce((a, b) => a + b, 0),
            chips,
            rating_sum_as_schoolmark: this.convertRatingToSchoolmark(fieldsForCalc.map(field => field.getFieldRating())
                .reduce((a, b) => a + b, 0) / fields.length),
        };
    }

    convertRatingToSchoolmark(rating: number): number {
        const result = (rating - 1) * (1 - 6) / (5 - 1) + 6;
        return result >= 6 ? 6 : Math.round(result * 10) / 10;
    }
}
