import React from 'react';
import './App.css';
import Index from './pages/todos';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appState from './redux';
const store = createStore(appState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
