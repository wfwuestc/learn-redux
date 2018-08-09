import * as ActionTypes from './ActionTypes.js';

let nextId = 1;

export const add = (val) => {
    return {
        type: ActionTypes.ADD,
        content: val,
        id: nextId++,
    };
}

export const toggle = (id) => {
    return {
        type: ActionTypes.TOGGLE,
        id: id,
    };
}

export const del = (id) => {
    return {
        type: ActionTypes.DEL,
        id: id,
    };
}