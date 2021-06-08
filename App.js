import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';
export const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
