function reducerAuth(state = false, action) {
  switch (action.type) {
    case 'LogIn':
      return action.loggedIn;
    case 'LogOut':
      return false;

    default:
      return state;
  }
}

export default reducerAuth;
