import React from 'react';
import './App.css';
import Todo from './todo/views/todo'
import Filters from './filter/views/filters'
import Weather from './weather/view'

const App = () => {
    return (
        [
            <Weather key={1}/>,
            <Todo key={2}/>,
            <Filters key={3}/>,
        ]
    )
}

export default App
