import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResult from './SearchResult'

function Search({ setView, currentQuestion }) {

  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    fetchSearchResults(currentQuestion.google_search_keyword);

    async function fetchSearchResults(keywords) {
      const res = await axios.post(`/highlight-search`, { query: keywords });
      const data = res.data;
      setSearchResults(data);
    }
  }, [currentQuestion, setSearchResults])

  return (
    <div id="search-view">
      <div id="search-results">
        {
          searchResults &&
          searchResults.map(result => {
            return (
              <SearchResult key={result.cacheId} data={result} />
            )
          })
        }
      </div>
      <button onClick={() => { setView("regular-questions") }}>BACK TO QUESTIONS</button>
    </div>
  )
}

export default Search
