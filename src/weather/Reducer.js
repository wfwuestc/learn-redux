import * as ActionTypes from './ActionTypes.js';

const weatherReducer =  (state = {status: ActionTypes.REQUEST}, action) => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.REQUEST: {
            return {status: ActionTypes.REQUEST}
        }
        case ActionTypes.SUCCESS: {
            return {...state, status: ActionTypes.SUCCESS, ...action.result}
        }
        case ActionTypes.FAILURE: {
            return {status: ActionTypes.FAILURE}
        }
        default: {
            return state
        }
    }
}
export default weatherReducer
