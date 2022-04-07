import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
//import './SearchPage.css';
import { useNavigate } from "react-router-dom";


function SearchPage(): JSX.Element {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()


  const onSearchInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;
    setSearchInput(inputValue);

  }

  const onClickSearch = () => {
    // setSearchParams({search: searchInput});
    navigate(`/results/${searchInput}`, )
    
  }

  return (
    <div className='search'>
      <h1>Home</h1>
      <input value={searchInput} placeholder="Search a Shy Term" onChange={onSearchInputChange}/>
      <button onClick={onClickSearch}>Search </button>
    </div>

  );
}

export default SearchPage;
