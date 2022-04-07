import React from 'react';
import { Routes, Route } from "react-router-dom";

import SearchPage from './Pages/SearchPage/SearchPage';
import ResultsPage from './Pages/ResultsPage/ResultsPage';
import NavBar from './components/NaviBar/NaviBar';

import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<SearchPage/>} />
      <Route path="/results/*" element={<ResultsPage/>} />
    </Routes>
    </>
  );
}

export default App;
