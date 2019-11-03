import { combineReducers } from 'redux';
import addATodo from './reducers';

const appState = combineReducers({
  addATodo,
})

export default appState;