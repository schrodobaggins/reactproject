import React from 'react';
import { Routes, Route } from "react-router-dom";

import SearchPage from './Pages/SearchPage/SearchPage';
import ResultsPage from './Pages/ResultsPage/ResultsPage';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<SearchPage/>} />
      <Route path="/results/*" element={<ResultsPage/>} />
    </Routes>
    </>
  );
}

export default App;
