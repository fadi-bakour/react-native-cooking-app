// Imports: Dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// Imports: Redux
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer'],
};
const middlewares = [thunk];

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {store, persistor};
