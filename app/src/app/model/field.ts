import {Resource, resources} from './resource';

export const SPAWNABLE_RES: string[] = ['mountain', 'forest', 'field', 'sheep', 'clay'];

export interface Harbour {
    position: number;
    resource?: Resource;
}

export class Field {
    x: number;
    y: number;
    resource: Resource;
    chip: number;
    harbour?: Harbour;

    constructor(x: number, y: number, resource?: Resource, chip?: number, harbour?: Harbour) {
        this.x = x;
        this.y = y;

        const res = SPAWNABLE_RES[Math.floor(Math.random() * SPAWNABLE_RES.length)];
        this.resource = resource ? resource : resources[res];
        if (![resources.water, resources.desert].includes(this.resource)) {
            this.chip = chip ? chip : Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        }
        if (harbour) {
            this.harbour = {
                position: harbour.position,
                resource: harbour.resource,
            };
        }
    }
}
