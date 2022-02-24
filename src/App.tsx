import React from 'react';
import { Routes, Route } from "react-router-dom";
import SearchPage from './Pages/SearchPage/SearchPage';
import ResultsPage from './Pages/ResultsPage/ResultsPage';
import Navibar from './components/Navbar/Navibar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Navibar/>
    <Routes>
      <Route path="/" element={<SearchPage/>} />
      <Route path="/results" element={<ResultsPage/>} />

    </Routes>
    </div>

   </>
  );
}

export default App;
