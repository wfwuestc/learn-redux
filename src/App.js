import React from 'react';
import './App.css';
import Todo from './todo/views/todo'
import Filters from './filter/views/filters'

const App = () => {
    return (
        [
            <Todo key={1}/>,
            <Filters key={2}/>,
        ]
    )
}

export default App
