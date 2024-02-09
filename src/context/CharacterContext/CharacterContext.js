// CharacterProvider.js
import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
import { apiGet } from 'src/services/api';

export const CharacterContext = createContext({});

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const fetchCharacters = async () => {
    try {
      const charactersData = await apiGet('character');
      setCharacters(charactersData);
    } catch (error) {
      // Handle error
    }
  };

  const fetchCharacterDetail = async (character) => {
    try {
      const charactersData = await apiGet(`character/${character?.id}`);
      setCharacters(charactersData);
    } catch (error) {
      // Handle error
    }
  };

  const selectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  // We wrap it in a useMemo for performance reason
  const contextPayload = useMemo(
    () => ({
      // States
      characters, selectedCharacter, selectCharacter,
      //API calls
      fetchCharacters,
      fetchCharacterDetail,

      //functions
    }),
    [
      // States
      characters, selectedCharacter, selectCharacter,
      //API calls
      fetchCharacters,
      fetchCharacterDetail,

      //functions
    ]
  );

  return (
    <CharacterContext.Provider value={contextPayload}>
      {children}
    </CharacterContext.Provider>
  );
};


// A custom hook to quickly read the context's value. It's
// only here to allow quick imports
export const useCharacterContext = () => useContext(CharacterContext);

export default CharacterContext
