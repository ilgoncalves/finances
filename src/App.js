import React from 'react';
import { Route, Switch, Router } from "react-router";
import { createBrowserHistory } from "history";
import { Login, Home } from './components/pages';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
