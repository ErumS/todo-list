import { combineReducers } from 'redux';
import reducer from './reducers';

const appState = combineReducers({
  allTodos: reducer,
})

export default appState;