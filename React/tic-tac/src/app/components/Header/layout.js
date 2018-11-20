import React, { Component } from 'react';
import logo from '@assets/logo.svg';

import style from './styles.scss';

import Exit from './index';

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
            <li>
              <Exit />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
