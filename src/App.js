import React from 'react';
import './App.css';
import Todo from './todo/views/todo'
import Filters from './filter/views/filters'
import Weather from './weather/view'

const App = () => {
    return (
        [
            <Todo key={1}/>,
            <Filters key={2}/>,
            <Weather key={3}/>
        ]
    )
}

export default App
