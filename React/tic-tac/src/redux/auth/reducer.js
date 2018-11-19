import { actions } from '@redux/auth/actions';

function reducerAuth(state = false, action) {
  switch (action.type) {
    case actions.LOGIN:
      return action.payload.loggedIn;
    case actions.LOGOUT:
      return false;
    default:
      return state;
  }
}

export default reducerAuth;
