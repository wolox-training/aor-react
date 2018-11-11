import React, { Component } from 'react';
import logo from '@assets/logo.svg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LogOut } from '../../../redux/auth/actions';

import style from './styles.scss';

class Header extends Component {
  out() {
    this.props.logOut();
  }

  render() {
    const status = this.props.loggedIn ? (
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.appTitle}>Tic Tac Toe</h1>
        <button type="submit" className={style.button} onClick={() => this.out()}>
          LogOut
        </button>
      </header>
    ) : (
      <Redirect to="/" />
    );
    return status;
  }
}

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
