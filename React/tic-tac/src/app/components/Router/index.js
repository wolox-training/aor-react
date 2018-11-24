import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '@redux/store';

import parseRoutes from './parseRoutes';

const Routes = props => (
  <ConnectedRouter history={history}>
    <Switch>{parseRoutes(props)}</Switch>
  </ConnectedRouter>
);

Routes.propTypes = {
  props: PropTypes.shape({
    auth: PropTypes.bool.isRequired
  })
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Routes);
