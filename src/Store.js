import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import todoReducer from './todo/Reducer';
import filterReducer from './filter/Reducer';
import weatherReducer from './weather/Reducer'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer,
    weather: weatherReducer,
});

const middlewares =[thunkMiddleware]


const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;