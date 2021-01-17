import React from 'react'
import './Search.css'

function Search(props) {

  return (
    <div >
      <div className="search-container">
        <div className="input container">
          <i className="fas fa-search"></i>
          <input
              value={props.searchQuery}
              placeholder="Search for movies"
              onChange={props.handleSearchQuery}
       />
        </div>
      </div>
      
    </div>
  )
}

export default Search
