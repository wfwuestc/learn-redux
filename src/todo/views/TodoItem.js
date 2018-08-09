import React from 'react'

const TodoItem = ({el, change, del}) => {
    return (
        <p>
            <input type="checkbox" data-id={el.id} defaultChecked={el.status === 1} onChange={change.bind(this)}/>
            <span className="todo-content">{el.content}</span>
            <span className={el.status === 0 ? "red" : "blue"}>{el.status === 0 ? '未完成' : '已完成'}</span>
            <span className="del-icon" onClick={del} data-id={el.id}> x </span>
        </p>
    )
}

export default TodoItem