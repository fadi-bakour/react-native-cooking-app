/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/Routes/Routes'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import authReducer from './src/reducers/authReducer'

const store = createStore(authReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
