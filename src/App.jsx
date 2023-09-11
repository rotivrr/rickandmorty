import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import AllCharacters from './pages/AllCharacters';
import HumanCharacters from './pages/HumanCharacters';
import AlienCharacters from './pages/AlienCharacters';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">All Characters</Link></li>
            <li><Link to="/human">Human Characters</Link></li>
            <li><Link to="/alien">Alien Characters</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/human" element={<HumanCharacters characters={characters} />} />
          <Route path="/alien" element={<AlienCharacters characters={characters} />} />
          <Route path="/" element={<AllCharacters characters={characters} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
