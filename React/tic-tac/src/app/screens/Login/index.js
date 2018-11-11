import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LogIn } from '../../../redux/auth/actions';

import style from './style.scss';
import Form from './components/Form';

class Login extends Component {
  handleSubmit({ email, password }) {
    alert('Submit');

    this.props.login(email, password);
  }

  render() {
    const status = this.props.loggedIn ? (
      <Redirect to="/game" />
    ) : (
      <div className={style.overlay}>
        <Form onSubmit={values => this.handleSubmit(values)} />
      </div>
    );

    return status;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(LogIn({ email, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
