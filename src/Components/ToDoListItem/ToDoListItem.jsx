import React, {Component} from 'react'
import './ToDoListItem.css'

class ToDoListItem extends Component {

  state = {
    done: false
  }

  onLabelClick = () => {
    this.setState({
      done: true
    })
  }

  render() {
    const {label, important = false} = this.props
    const {done} = this.state

    let classNames = 'ToDoListItem'

    if(done) {
      classNames += ' done'
    }


    const style = {
      color: important ? "green" : "black",
      fontWeight: important ? 'bold' : 'normal' 
    }

    return(
      <span className={classNames}>
        <span
          className="ToDoListItemLabel"
          style={style}
          onClick={this.onLabelClick}
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