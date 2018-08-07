import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {

    switch (action.type) {
        case ActionTypes.ADD:
            let state1 = {...state};
            let list = state1.list;
            list.push({
                status: 0,
                content: action.content
            })
            return {list: list};
        case ActionTypes.CHANGE:
            let currentStatus = state.list[action.index].status;
            let states = {...state};
            states.list[action.index].status = currentStatus === 0 ? 1 : 0;
            return states;

        default:
            return state
    }
}
