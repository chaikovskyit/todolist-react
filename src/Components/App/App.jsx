import React, {Component} from 'react'

import AddItemForm from '../AddItemForm/AddItemForm'
import AppHeader from '../AppHeader/AppHeader'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../ToDoList/ToDoList'

import './App.css'

class App extends Component {
  // при додаванні нових задач id буде починатись зі 100
  maxId = 100
  state = {
    // масив елементів 
    todoData: [
      {label: 'Task important', important: true, done: false, id: 1 },
      {label: 'task done', important: false, done: true, id: 2 },
    ],
    // елемент який відповідає за те що введено в полі пошук
    term: '',
    filter: 'all' // all, active, done
  }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id )
      const before = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)
      const newTodoData = [...before, ...after]
      return {
        todoData: newTodoData
      }
    })
  }
  addItem = (text) => {
    // generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }
    // add element in array
    this.setState(({todoData}) => {
      const newTodoData = [...todoData, newItem]
      return {
        todoData: newTodoData
      }
    })

    console.log('added', text);
  }
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id )
    // 1 update object
    const oldItem = arr[idx]
    const newItem = {...oldItem, 
      [propName]: !oldItem[propName]}
     // 2 construct new array
    
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]

  }
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }
  // Функція пошуку в яку ми передаємо масив завдань(items) і те що шукаємо(term)
  search(items, term) { 
    // якщо поле пошуку порожнє
    if(term.length === 0) {
      // виводимо весь масив завдань
      return items
    }
    // методом (filter) перебираємо масив і за допомогою (indexOf) шукає співпадіння і повертає новий масив
    return items.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }
  onSearchChange = (term) => {
    this.setState({
      term: term
    })
  }
  onFilterChange = (filter) => {
    this.setState({
      filter: filter
    })
  }
  // створюємо функцію 
  filter(items, filter) {

    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }
  render () {
    const { todoData, term, filter } = this.state
    // спочатку шукаємо, тоді фільтруємо і отримуєм результуючі айтеми на виході
    const visibleItems = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount
    return(
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter 
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList 
          // В звязку з тим що в нас є пошук по завданнях, ми відображаємо не просто масив завдань а саме те що нам потрібно 
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} 
        />
        <AddItemForm onItemAdded={this.addItem}/>
      </div>
    )
  }
}

export default App