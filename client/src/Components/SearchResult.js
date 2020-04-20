import React from 'react'

function SearchResult({ data }) {
  return (
    <div className="search-result">
      <a className="search-result-link" href={data.link}>
        {data.title}
      </a>
      <p className="search-result-url">
        {data.formattedUrl}
      </p>
      <p className="search-result-snippet">
        {data.snippet}
      </p>
    </div>
  )
}

export default SearchResult
