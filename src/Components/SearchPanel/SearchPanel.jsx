import React, {Component} from 'react'
import './SearchPanel.css'

class SearchPanel extends Component {
  
  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({
      term: term
    })
    this.props.onSearchChange(term)
  }

  render() {
    const searchText = 'Type here to search'
    return(
      <input 
        type="text"
        className="form-control SearchInput"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    )
  }
}

export default SearchPanel