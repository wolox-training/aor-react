import React, { Component } from 'react';
import logo from '@assets/logo.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LogOut } from '../../../redux/auth/actions';

import style from './styles.scss';

class Header extends Component {
  handleLogOut() {
    this.props.logOut();
  }

  render() {
    return (
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.appTitle}>Tic Tac Toe</h1>
        <button type="submit" className={style.button} onClick={() => this.handleLogOut()}>
          LogOut
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  logOut: PropTypes.func
};

const MapStateToProps = state => ({
  loggedIn: state.auth
});

const MapDispatchToProps = dispatch => ({
  logOut: () => dispatch(LogOut())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Header);
