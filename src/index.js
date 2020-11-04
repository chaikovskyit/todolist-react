import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './Components/AppHeader/AppHeader'
import SearchPanel from './Components/SearchPanel/SearchPanel'
import TodoList from './Components/ToDoList/ToDoList'

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Create React App', important: true, id: 2 },
    { label: 'Learn Redux', important: false, id: 3 }
  ]

  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))