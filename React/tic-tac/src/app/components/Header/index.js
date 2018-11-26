import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '@redux/auth/actions';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from '@const/routes';
import Header from './layout';
import style from './styles.scss';

class HeaderContainer extends Component {
  renderRoutes = routes
    .filter(route => route.showOnMenu)
    .map(route => (
      <NavLink activeStyle={{ color: '#666' }} className={style.link} key={route.key} to={route.path}>
        {route.name}
      </NavLink>
    ));

  render() {
    const { logOut } = this.props;
    return <Header logOut={logOut} renderRoutes={this.renderRoutes} />;
  }
}

HeaderContainer.propTypes = {
  logOut: PropTypes.func
};

const mapStateToProps = state => ({
  loggedIn: state.auth
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actions.logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
