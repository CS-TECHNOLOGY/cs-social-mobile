import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';
import Toast from 'react-native-toast-message';
export const App = () => {
  const toastConfig = {
    info: internalState => (
      <View style={{height: 60, width: '100%', backgroundColor: 'pink'}}>
        <Text>{internalState.text1}</Text>
      </View>
    ),
  };
  return (
    <NavigationContainer>
      <Router />
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};
