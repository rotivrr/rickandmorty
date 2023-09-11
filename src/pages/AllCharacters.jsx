import React from 'react';
import '../App.css';

function AllCharacters({ characters }) {
  return (
    <div className="container">
      <h2>All Characters</h2>
      <div className="character-list">
        {characters.map(character => (
          <div className="character-card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCharacters;
