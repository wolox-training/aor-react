import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import way from './path';

const showWay = () => way.map(route => <Route key={route.key} {...route} />);

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>{showWay()}</Switch>
    </Fragment>
  </Router>
);

export default Routes;
