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
import { store, persistor } from './src/store/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
