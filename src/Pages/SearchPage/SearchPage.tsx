import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import SearchResults from '../../components/SearchResults/SearchResults';


function SearchPage(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()


  const onSearchInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;
    setSearchInput(inputValue);
  }

  const onClickSearch = () => {
    setSearchParams({search: searchInput});
    
  }

  return (
    <div>
      <h1>Search Term</h1>
      <input value={searchInput} onChange={onSearchInputChange}/>

      <button onClick={onClickSearch}>Search </button>

      {searchResults && <SearchResults />}
    </div>

  );
}

export default SearchPage;
