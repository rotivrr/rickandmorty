import React from 'react';
import '../App.css';

function HumanCharacters({ characters }) {
  const humanCharacters = characters.filter(character => character.species === 'Human');

  return (
    <div className="container">
      <h2>Human Characters</h2>
      <div className="character-list">
        {humanCharacters.map(character => (
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

export default HumanCharacters;
