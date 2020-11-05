import React, {Component} from 'react'
import './ToDoListItem.css'

class ToDoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState({
      done: true
    })
  }
  onMarkImportant = () => {
    this.setState({
      important: true
    })
  }

  render() {
    const {label} = this.props
    const {done, important} = this.state

    let classNames = 'ToDoListItem'

    if(done) {
      classNames += ' done'
    }
    if(important) {
      classNames += ' important'
    }

    return(
      <span className={classNames}>
        <span
          className="ToDoListItemLabel"
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <button 
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
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