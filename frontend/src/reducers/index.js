import { combineReducers } from 'redux';

import exampleReducer from '../ducks/example';


export default combineReducers({
  example: exampleReducer,
});