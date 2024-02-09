// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterDetails from '../screens/Home/CharacterDetails/CharacterDetails';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        gestureEnabled: false
      }}
      initialRouteName={'Home'}
    >
      <Stack.Screen
        name={'Home'}
        component={Home}
      />
      <Stack.Screen
        name={'CharacterDetails'}
        component={CharacterDetails}
      />
    </Stack.Navigator>

  );
}

export default HomeNavigator;
