import React, { Component } from 'react';
import logo from '@assets/logo.svg';

import style from './styles.scss';

class Header extends Component {
  render() {
    return (
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.appTitle}>Tic Tac Toe</h1>
      </header>
    );
  }
}

export default Header;
