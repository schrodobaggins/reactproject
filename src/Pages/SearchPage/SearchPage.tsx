import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '.././SearchPage/SearchPage.css';

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
   
      <input value={searchInput} placeholder="Search a Shy Term" onChange={onSearchInputChange}/>
      <button onClick={onClickSearch}>Search </button>
    </div>

  );
}

export default SearchPage;
