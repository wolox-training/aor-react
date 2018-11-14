import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from './path';

const parseRoutes = loggedIn =>
  routes.map(route => {
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
      <Switch>{parseRoutes(props.loggedIn)}</Switch>
    </Fragment>
  </Router>
);

Routes.propTypes = {
  loggedIn: PropTypes.bool
};

const mapStateToProps = state => ({
  loggedIn: state.auth
});

export default connect(mapStateToProps)(Routes);
