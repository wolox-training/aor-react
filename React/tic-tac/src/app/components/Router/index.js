import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import way from './path';

const showWay = loggedIn =>
  way.map(route => {
    let status;
    if (route.protected && !loggedIn) {
      status = <Redirect to="/" />;
    } else if (!route.protected && loggedIn) {
      status = <Redirect to="/Game" />;
    } else {
      status = <route.renderComponent />;
    }
    return <Route key={route.key} render={() => status} {...route} />;
  });

const Routes = props => (
  <Router>
    <Fragment>
      <Switch>{showWay(props.loggedIn)}</Switch>
    </Fragment>
  </Router>
);

Routes.propTypes = {
  loggedIn: PropTypes.bool
};

const MapStateToProps = state => ({
  loggedIn: state.auth
});

export default connect(MapStateToProps)(Routes);
