function reducerAuth(state = false, action) {
  switch (action.type) {
    case 'LogIn':
      return true;
    case 'LogOut':
      return false;

    default:
      return state;
  }
}

export default reducerAuth;
