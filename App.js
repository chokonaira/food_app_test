import React from 'react';
import { View } from 'react-native';
import {GlobalStyles} from "./src/styles/globalStyles"

import Home from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={GlobalStyles.container}>
      <Home/>
    </View>
  );
}
export default App
