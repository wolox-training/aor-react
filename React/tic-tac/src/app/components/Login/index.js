import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';

import style from './style.scss';

class Login extends Component {
  state = {
    loggedIn: false
  };

  loginHandle() {
    this.setState(() => ({ loggedIn: true }));
  }

  fragmentRender() {
    return (
      <Fragment>
        <div className={style.overlay}>
          <div className={`${style.login} ${style.fadeInDown} ${style.animated}`}>
            <input className={style.space} type="text" id="email" placeholder="E-mail" />
            <input className={style.space} type="password" id="password" placeholder="Password" />
            <input
              className={style.space}
              type="submit"
              id={style.submit}
              value="Log In"
              onClick={() => this.loginHandle()}
            />
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    let redirectOrComponent;

    if (this.state.loggedIn) {
      redirectOrComponent = <Redirect to="/Game" />;
    } else {
      redirectOrComponent = this.fragmentRender();
    }

    return redirectOrComponent;
  }
}

export default Login;
