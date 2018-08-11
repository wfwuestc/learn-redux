import React from 'react'
import TodoList from './todoList'
import AddTodo from './addTodo'

const Todo = () => {
    return ([
        <AddTodo key={1}/>,
        <TodoList key={2}/>
    ])
};

export default Todo