import React, { Component } from 'react';
import logo from '@assets/logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '@redux/auth/actions';

import routesHeader from './constants';
import style from './styles.scss';

console.log(routesHeader);

class Header extends Component {
  render() {
    return (
      <header className={style.appHeader}>
        <div className={style.child} />
        <div className={`${style.child} ${style.childfeatured}`}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <h1 className={style.appTitle}>Tic Tac Toe</h1>
        </div>
        <div className={` ${style.child} ${style.alignright}`}>
          <ul className={style.menu}>
            {routesHeader.map(route =>(
            <li><Link className={style.link} to={route.path}>{route.name}</Link></li>
            ))}
            <li>
              <button type="submit" className={style.button} onClick={this.props.logOut}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
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
  logOut: () => dispatch(actions.logOut())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Header);
