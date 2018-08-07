import * as ActionTypes from './ActionTypes.js';

export const add = (val) => {
    return {
        type: ActionTypes.ADD,
        content: val
    };
}

export const change = (index) => {
    return {
        type: ActionTypes.CHANGE,
        index: index
    };
}