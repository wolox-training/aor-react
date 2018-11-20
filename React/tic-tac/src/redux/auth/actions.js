import Service from '@services/UserService';

export const actions = { LOGIN: 'LOGIN', LOGOUT: 'LOGOUT' };

function logIn(payload) {
  return async dispatch => {
    const response = await Service(payload);
    if (response.ok) {
      dispatch({
        type: actions.LOGIN,
        payload: { loggedIn: true }
      });
    } else {
      throw new Error();
    }
  };
}

function logOut() {
  return {
    type: actions.LOGOUT
  };
}

export default { logOut, logIn };
