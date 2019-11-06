import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './config/routes';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/">
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
