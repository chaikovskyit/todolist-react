import React, {Component} from 'react'
import './ToDoListItem.css'

class ToDoListItem extends Component {

  render() {
    
    const {label, important = false} = this.props

    const style = {
      color: important ? "green" : "black",
      fontWeight: important ? 'bold' : 'normal' 
    }

    return(
      <span className="ToDoListItem">
        <span
          className="ToDoListItemLabel"
          style={style}
        >
          {label}
        </span>
  
        <button 
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
  
        <button 
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}


  
  

export default ToDoListItem