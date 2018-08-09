import {createStore, combineReducers, compose} from 'redux';
import todoReducer from './todo/Reducer';
import filterReducer from './filter/Reducer';

const reducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer
});

const store = createStore(
    reducer,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;