import { combineReducers } from 'redux';
import todoReducer from './reducers';

const appState = combineReducers({
  todoReducer,
})

export default appState;