import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
//import ResultsPage from '../ResultsPage/ResultsPage';

import SearchResults from '../../components/SearchResults/SearchResults';
import Data from "./fake_data.json";



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
      <h1>Home</h1>
      <input value={searchInput} placeholder="Search a Shy Term" onChange={onSearchInputChange}/>
       
      <button onClick={onClickSearch}>Search </button>
      {Data.filter((val)=> {
        if(searchInput === ""){
          return val
        }else if(val.Name.toLowerCase().includes(searchInput.toLowerCase()) || val.Description.toLowerCase().includes(searchInput.toLowerCase())){
          return val
        }
      }).map((val,key)=>{
        return <div>
          <b>{val.Name}</b>
          <br></br>
        {val.Description}</div>
      })}
      {searchResults && <SearchResults />}
    </div>
    
  );
}

export default SearchPage;
