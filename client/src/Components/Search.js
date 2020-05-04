import React, { useState, useEffect, useContext } from 'react'
import { QuizContext } from '../App'
import axios from 'axios'
import SearchResult from './SearchResult'

function Search({ setView, currentQuestion }) {
  const {state, dispatch} = useContext(QuizContext);
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    fetchSearchResults(state.currentArticle.keywords);

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
    </div>
  )
}

export default Search
