import actions from '@redux/auth/actions';

function reducerAuth(state = false, action) {
  switch (action.type) {
    case actions.logInTrue().type:
      return action.loggedIn;
    case actions.logOut().type:
      return false;

    default:
      return state;
  }
}

export default reducerAuth;
