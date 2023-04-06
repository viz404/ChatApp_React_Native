import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';

import StackNavigator from './src/navigators/StackNavigator';
import store from './src/reduxStore/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
