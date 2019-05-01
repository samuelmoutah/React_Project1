import React from 'react'

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <input type='checkbox' checked={props.todos.completed}/>
            <p>{props.todos.text}</p>
        </div>
    )
}

export default TodoItem