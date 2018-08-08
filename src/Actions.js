import * as ActionTypes from './ActionTypes.js';
export const add = (val) => {
    return {
        type: ActionTypes.ADD,
        content: val
    };
}

export const toggle = (index) => {
    return {
        type: ActionTypes.TOGGLE,
        index: index
    };
}