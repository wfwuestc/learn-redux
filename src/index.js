import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import store from './Store.js';
import Provider from './Provider.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
