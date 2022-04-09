import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
//import './SearchPage.css';
import { useNavigate } from "react-router-dom";
import '.././SearchPage/SearchPage.css';
import {initializeApp} from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCQ1xunGvoVrDTwXffoTjkq9HgNRcCaGcU",
  authDomain: "shyclopedia.firebaseapp.com",
  projectId: "shyclopedia",
  storageBucket: "shyclopedia.appspot.com",
  messagingSenderId: "747099239507",
  appId: "1:747099239507:web:ac3e4b2dbe9453e56382a6",
  measurementId: "G-7PKZP0L3JP"
};
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app); 
 //const databaseRef = initializeApp.database().ref();
 //export const todosRef = databaseRef.child("todos");


function SearchPage(): JSX.Element {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()

  

  const onSearchInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;
    setSearchInput(inputValue);

  }
 

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      navigate(`/results/${searchInput}`)
    }
  };

  const onClickSearch = () => {
    // setSearchParams({search: searchInput});
    navigate(`/results/${searchInput}`, )
    
  }
  
 
  return (
    <div className='search'>
      <input onKeyPress={keyDownHandler} value={searchInput} placeholder="Search a Shy Term" onChange={onSearchInputChange}/>
      <button onClick={onClickSearch}>Search </button>
    </div>

  );
  
}

export default SearchPage;
