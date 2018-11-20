import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '@redux/auth/actions';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Exit extends Component {
  render() {
    return (
      <button type="submit" className={style.button} onClick={this.props.logOut}>
        LogOut
      </button>
    );
  }
}

Exit.propTypes = {
  logOut: PropTypes.func
};

const mapStateToProps = state => ({
  loggedIn: state.auth
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actions.logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exit);
