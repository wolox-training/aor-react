import React from 'react';
import logo from '@assets/logo.svg';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routesHeader from './constants.js';
import style from './styles.scss';

function Header({ logOut }) {
  const renderRoutes = routesHeader.map(route => (
    <NavLink activeClassName={style.selected} className={style.link} key={route.key} to={route.path}>
      {route.name}
    </NavLink>
  ));

  return (
    <header className={style.appHeader}>
      <div className={style.child} />
      <div className={`${style.child} ${style.childfeatured}`}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <h1 className={style.appTitle}>Tic Tac Toe</h1>
      </div>
      <div className={` ${style.child} ${style.alignright}`}>
        <ul className={style.menu}>
          {renderRoutes}
          <li>
            <button type="submit" className={style.button} onClick={logOut}>
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  logOut: PropTypes.func
};

export default Header;
