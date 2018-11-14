import Service from '@services/UserService';

function logInTrue(payload) {
  return {
    type: 'LOG_IN',
    loggedIn: payload
  };
}

function logIn(payload) {
  return dispatch => {
    Service(payload)
      .then(response => {
        if (response.ok) {
          dispatch(logInTrue(true));
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        // eslint-disable-next-line
        alert("Error al iniciar sesión");
      });
  };
}

function logOut() {
  return {
    type: 'LOG_OUT'
  };
}

export default { logInTrue, logOut, logIn };
