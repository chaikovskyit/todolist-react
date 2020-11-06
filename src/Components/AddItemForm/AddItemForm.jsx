import React, {Component} from 'react'

import './AddItemForm.css'



class AddItemForm extends Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {
    return(
      <form 
        className="AddItemForm d-flex"
        onSubmit={this.onSubmit}
      >
        <input 
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button 
          className="btn btn-outline-secondary"
        >
          Add Item
        </button>
      </form>
    )
  }
}

export default AddItemForm