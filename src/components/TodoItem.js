import React from 'react'

const TodoItem = ({el, change}) => {
    return (
        <p>
            <input type="checkbox" data-id={el.id} defaultChecked={el.status === 1} onChange={change.bind(this)}/>
            <span className="todo-content">{el.content}</span>
            <span className={el.status === 0 ? "red" : "blue"}>{el.status === 0 ? '未完成' : '已完成'}</span>
        </p>
    )
}

export default TodoItem