function LogInTrue(payload) {
  return {
    type: 'LogIn',
    loggedIn: payload
  };
}

export function LogOut() {
  return {
    type: 'LogOut'
  };
}

export default LogInTrue;
