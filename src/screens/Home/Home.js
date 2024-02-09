// Home.js
import React, { useState, useEffect } from 'react';
// import { useCharacterContext } from '../../context/CharacterContext/CharacterContext';
import { View } from 'react-native';
import CharacterList from '../../component/parts/CharacterList/CharacterList';

const Home = ({ navigation }) => {
  // const { characters, fetchCharacters } = useCharacterContext();

// useEffect(() => {
//   fetchCharacters()
// }, []);

  const handleCharacterPress = (character) => {
    navigation.navigate('CharacterDetails', { character });
  };

  return (
    <View>
      <CharacterList characters={[]} onCharacterPress={handleCharacterPress} />
    </View>
  );
};

export default Home;
