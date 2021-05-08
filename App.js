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

import Toast from 'react-native-toast-message';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
};

export default App;
