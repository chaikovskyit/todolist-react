import React from 'react'
import ToDoListItem from '../ToDoListItem/ToDoListItem'

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    // Отримуємо id з item
    const { id, ...itemProps } = item


    return (
      <li key={id}>
        <ToDoListItem { ...itemProps }/>
      </li>
    )
  })

  return(
    <ul>
      { elements }
    </ul>
  )
}

export default TodoList