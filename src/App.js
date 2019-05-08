import React from 'react'
import TodoItem from './TodoItem';
import todosData from './todosData'

function App() {
  const todoComponents = todosData.map(item => {
    return (
      <TodoItem key={item.id} todos={item} />
    )
  })
  return (
    <div className='todo-list'>
      {todoComponents}
    </div>
  )
}


export default App