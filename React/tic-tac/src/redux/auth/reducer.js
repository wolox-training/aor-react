import actions from '@redux/auth/actions';

function reducerAuth(state = false, action) {
  switch (action.type) {
    case actions.logIn:
      return action.loggedIn;
    case actions.logOut:
      return false;

    default:
      return state;
  }
}

export default reducerAuth;
