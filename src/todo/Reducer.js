import * as ActionTypes from './ActionTypes.js';

const initValues = {
  list: [{
    id:0,
    status: 0,
    content: '添加你想做的事',
  }]
};

const todoReducer = (state = initValues, action) => {
    switch (action.type) {
        case ActionTypes.ADD:
            return {
                list: [...state.list, {
                    id: action.id,
                    status: 0,
                    content: action.content
                }]
            };
        case ActionTypes.TOGGLE:
            return {
                list: state.list.map((el) => {
                    if (el.id === Number(action.id)) {
                        return {...el, status: el.status === 0 ? 1 : 0}
                    } else {
                        return el
                    }
                })
            };
        case ActionTypes.DEL:
            return {
                list: state.list.filter((el) => {
                    return el.id !== Number(action.id)
                })
            };
        default:
            return state
    }
}

export default todoReducer