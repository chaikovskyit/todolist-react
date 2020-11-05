import React from 'react'
import './SearchPanel.css'

const SearchPanel = () => {
  const searchText = 'Type here to search'
  return(
    <input 
      type="text"
      className="form-control SearchInput"
      placeholder="type to search" 
    />
  )
}

export default SearchPanel