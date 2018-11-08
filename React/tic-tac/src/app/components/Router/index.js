import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from '@screens/Game';
import LoginForm from '@screens/Login';

const Location = [
  { path: '/', component: LoginForm, key: 1, exact: true },
  { path: '/game', component: Game, key: 2 }
];

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        {Location.map(route => (
          <Route key={route.key} {...route} />
        ))}
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
