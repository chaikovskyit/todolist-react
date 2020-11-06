import React from 'react'

import ToDoListItem from '../ToDoListItem/ToDoListItem'
import './ToDoList.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {

    // Отримуємо id з item а все інше маємо в itemProps
    const { id, ...itemProps } = item


    return (
      <li key={id} className="list-group-item">
        <ToDoListItem 
          { ...itemProps }
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    )
  })

  return(
    <ul className="list-group ToDoList">
      { elements }
    </ul>
  )
}

export default TodoList