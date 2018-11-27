import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import action from '@redux/auth/actions';
import LoadingHOC from '@components/withIsLoading';

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

const mapStateToProps = state => ({ userLoading: state.auth.userLoading });

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(action.logIn({ email, password }))
});

Login.propTypes = {
  login: PropTypes.func
};

const HOC = LoadingHOC(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HOC);
