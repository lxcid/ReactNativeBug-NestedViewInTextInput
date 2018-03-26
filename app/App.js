import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TextImageScreen from './screens/TextImageScreen';
import TextViewScreen from './screens/TextViewScreen';
import TextInputImageScreen from './screens/TextInputImageScreen';
import TextInputViewScreen from './screens/TextInputViewScreen';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  TextImage: {
    screen: TextImageScreen,
  },
  TextView: {
    screen: TextViewScreen,
  },
  TextInputImage: {
    screen: TextInputImageScreen,
  },
  TextInputView: {
    screen: TextInputViewScreen,
  },
});
