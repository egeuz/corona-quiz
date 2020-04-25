import React from 'react'
import SearchResult from './SearchResult'

function Search({ searchResults }) {
  return (
    <div id="search-results">
      {
        searchResults &&
        searchResults.map(result => {
          return (
            <SearchResult key={result.cacheId} data={result}/>
          )
        })
      }
    </div>
  )
}

export default Search
