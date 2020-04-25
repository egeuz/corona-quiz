import React from 'react'

function Search({setView}) {
  return (
    <div>
      <div id="search-result">insert google search data here</div>
      <button onClick={() => {setView("regular-questions")}}>BACK TO QUESTIONS</button>
    </div>
  )
}

export default Search
