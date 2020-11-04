import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './Components/AppHeader/AppHeader'
import SearchPanel from './Components/SearchPanel/SearchPanel'
import TodoList from './Components/ToDoList/ToDoList'

const App = () => {
  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))