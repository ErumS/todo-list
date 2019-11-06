import { combineReducers } from 'redux';
import reducer from './todos/reducers';

const reducers = combineReducers({
  allTodos: reducer,
})

export default reducers;