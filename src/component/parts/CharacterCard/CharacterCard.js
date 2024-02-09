// CharacterCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CharacterCard = ({ character, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image source={{ uri: character.image }} style={{ width: 100, height: 100 }} />
        <Text>{character.name}</Text>
        {/* Additional character information can be displayed here */}
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
