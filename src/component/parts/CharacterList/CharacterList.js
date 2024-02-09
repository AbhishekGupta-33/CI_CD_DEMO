// CharacterGrid.js
import React from 'react';
import { FlatList } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard'

const CharacterList = ({ characters, onCharacterPress }) => {
  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CharacterCard character={item} onPress={() => onCharacterPress(item)} />}
      numColumns={2}
    />
  );
};

export default CharacterList;
