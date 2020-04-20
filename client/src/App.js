import React, {useState, useEffect} from 'react';
import axios from 'axios';

/*** COMPONENTS ***/
import Article from './Components/Article';
import Search from './Components/Search';

function App() {

  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    async function fetchFromStrapi() {
      let response = await axios.get('http://admin.egeuz.com/projects');
      console.log(response.data[0].title);
    }

    fetchFromStrapi();
  });
  return (
    <div>
      <Article setSearchResults={setSearchResults} />
      <Search searchResults={searchResults} />
    </div>
  )
}

export default App
