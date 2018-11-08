import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import style from './style.scss';

class LoginForm extends Component {
  state = {
    loggedIn: false
  };

  loginHandle = () => {
    this.setState(() => ({ loggedIn: true }));
  };

  render() {
    const status = this.state.loggedIn ? (
      <Redirect to="/Game" />
    ) : (
      <Fragment>
        <div className={style.overlay}>
          <div className={`${style.login} ${style.fadeInDown} ${style.animated}`}>
            <input className={style.space} type="text" id="email" placeholder="E-mail" />
            <input className={style.space} type="password" id="password" placeholder="Password" />
            <input
              className={`${style.space} ${style.submit}`}
              type="submit"
              value="Log In"
              onClick={this.loginHandle}
            />
          </div>
        </div>
      </Fragment>
    );

    return status;
  }
}

export default LoginForm;
