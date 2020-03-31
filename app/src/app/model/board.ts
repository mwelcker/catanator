import {Field} from './field';

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

    get fields() {
        this.size = {
            x: Math.max.apply(Math, this._fields.map(field => field.x)),
            y: Math.max.apply(Math, this._fields.map(field => field.y))
        };
        return this._fields;
    }
}
