/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackMain from './src/navigations/StackMain';

const App = () => {
  return (
    <NavigationContainer>
      <StackMain/>
    </NavigationContainer>
  );
};

export default App;
