import * as ActionTypes from './ActionTypes.js';
export const add = (val) => {
    return {
        type: ActionTypes.ADD,
        content: val
    };
}

export const toggle = (id) => {
    return {
        type: ActionTypes.TOGGLE,
        id: id
    };
}