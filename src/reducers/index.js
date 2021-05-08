// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import {authReducer} from './authReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
});
// Exports
export default rootReducer;
