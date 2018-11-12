import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LogIn } from '../../../redux/auth/actions';

import style from './style.scss';
import Form from './components/Form';

class Login extends Component {
  handleSubmit({ email, password }) {
    this.props.login(email, password);
  }

  render() {
    return (
      <div className={style.overlay}>
        <Form onSubmit={values => this.handleSubmit(values)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(LogIn({ email, password }))
});

Login.propTypes = {
  login: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
