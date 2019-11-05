import { combineReducers } from 'redux';
import { addReducer, editReducer, deleteReducer } from './reducers';

const appState = combineReducers({
  add: addReducer,
  edit: editReducer,
  delete: deleteReducer,
})

export default appState;