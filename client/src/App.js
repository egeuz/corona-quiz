import React, {useState} from 'react';

/*** COMPONENTS ***/
import Article from './Components/Article';
import Search from './Components/Search';

function App() {

  const [searchResults, setSearchResults] = useState("");

  return (
    <div>
      <Article setSearchResults={setSearchResults} />
      <Search searchResults={searchResults} />
    </div>
  )
}

export default App
