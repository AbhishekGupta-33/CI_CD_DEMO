/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppContextManager from './context';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './navigation/AppNavigator';


function App() {


  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AppContextManager>
      <App />
    </AppContextManager>
  )
}
