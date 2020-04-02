export class Resource {
    name: string;
    color: string;
    image: string;
}

export const resources: { [key: string]: Resource } = {
    water: {
        name: 'water',
        color: '#51919e',
        image: ''
    },
    mountain: {name: 'mountain', color: '#b2a58a', image: ''},
    forest: {name: 'forest', color: '#31723c', image: ''},
    field: {name: 'field', color: '#e7c257', image: ''},
    sheep: {name: 'sheep', color: '#9aae1d', image: ''},
    clay: {name: 'clay', color: '#aa6b21', image: ''},
    desert: {name: 'desert', color: '#ceb458', image: ''},
    none: {name: 'none', color: 'rgba(0,0,0,0)', image: ''},
};
