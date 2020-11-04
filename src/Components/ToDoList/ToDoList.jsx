import React from 'react'
import ToDoListItem from '../ToDoListItem/ToDoListItem'

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <li>
        {/* використали спред оператор для обєктів, для того щоб передати усі ключі і значення з нашого стейту */}
        <ToDoListItem { ...item }/>
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