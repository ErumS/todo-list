import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/todos';
import About from '../about';
import Home from '../home';

const routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/home' component={About} />
        <Route exact path='/about' component={Home} />
      </Switch>
    </React.Fragment>
  )
}

export default routes;