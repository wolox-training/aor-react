import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../screens/Game';
import Login from '../Login';

const Rout = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Game" component={Game} />
        {/* <Redirect from="/" to="/game" /> */}
      </Switch>
    </Fragment>
  </Router>
);

export default Rout;
