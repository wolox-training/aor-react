import Service from '@services/UserService';

export const actions = { LOGIN: 'LOGIN', LOGOUT: 'LOGOUT' };

function logInTrue() {
  return {
    type: actions.LOGIN,
    loggedIn: true
  };
}

function logIn(payload) {
  return dispatch => {
    Service(payload)
      .then(response => {
        if (response.ok) {
          dispatch(logInTrue());
        } else {
          throw new Error();
        }
      })
      .catch(() => {});
  };
}

function logOut() {
  return {
    type: actions.LOGOUT
  };
}

export default { logInTrue, logOut, logIn };
