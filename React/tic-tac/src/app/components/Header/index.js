import React from 'react';
import { connect } from 'react-redux';
import actions from '@redux/auth/actions';
import PropTypes from 'prop-types';

import Header from './layout';

function HeaderContainer({ logOut }) {
  return <Header logOut={logOut} />;
}

HeaderContainer.propTypes = {
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
)(HeaderContainer);
