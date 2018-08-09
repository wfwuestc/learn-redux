import React from 'react'
import TodoList from './todolist'
import AddTodo from './addtodo'

const Todo = () => {
    return ([
        <AddTodo key={1}/>,
        <TodoList key={2}/>
    ])
};

export default Todo