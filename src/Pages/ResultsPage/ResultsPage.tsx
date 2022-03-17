import './ResultsPage.css';
import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Data from "../../components/SearchResults/fake_data.json";

function ResultsPage(): JSX.Element {
  let [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  let pathArray = window.location.pathname.split('/results/');
  
 
  
  const onSearchInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;
    setSearchInput(inputValue);
  }

  const onClickSearch = () => {
    setSearchParams({search: searchInput});
    
  }

  return (
    <div>
       <div className='search-results-for'><b>Search results for: </b> {pathArray}</div>
      
      {Data.filter((val) => {
        if(pathArray[1] === ""){
          return val
        }else if(val.Name.toLowerCase().includes(pathArray[1].toLowerCase()) || val.Description.toLowerCase().includes(pathArray[1].toLowerCase())){
          return val
        }
      }).map((val,key)=>{
        return <div className="search-results">
          <div className="search-box"><h1>{val.Name}</h1>
         {val.Description}</div>
        </div>
      })}      
      </div>    
    
  )
}

export default ResultsPage;
