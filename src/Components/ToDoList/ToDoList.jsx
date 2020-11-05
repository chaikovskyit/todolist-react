import React from 'react'

import ToDoListItem from '../ToDoListItem/ToDoListItem'
import './ToDoList.css'

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    // Отримуємо id з item а все інше маємо в itemProps
    const { id, ...itemProps } = item


    return (
      <li key={id} className="list-group-item">
        <ToDoListItem { ...itemProps }/>
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