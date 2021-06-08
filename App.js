import React from 'react';
import {View} from 'react-native';
import { Registration } from './src/containers/Auth/Registration';
import { SignIn } from './src/containers/Auth/SignIn';
export const App = () => {
  return (
    <View>
      <Registration/>
    </View>
  );
};
