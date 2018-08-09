import * as ActionTypes from './ActionTypes.js';

export const setFilter = (filterType) => {
    return {
        type: ActionTypes.SET_FILTER,
        filter: filterType
    };
}