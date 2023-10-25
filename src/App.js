import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Router />
      <FlashMessage position="top" />
    </View>
  );
};
export default App;
