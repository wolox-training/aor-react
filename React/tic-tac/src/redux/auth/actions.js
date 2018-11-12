import UserService from '../../services/UserService';

export function LogInTrue(payload) {
  return {
    type: 'LogIn',
    loggedIn: payload
  };
}

export function LogIn(payload) {
  return dispatch => {
    UserService.post('/Users/login', {
      email: payload.email,
      password: payload.password
    })
      .then(response => {
        if (response.ok) {
          dispatch(LogInTrue(true));
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        alert('Error al iniciar sesión');
      });
  };
}

export function LogOut() {
  return {
    type: 'LogOut'
  };
}
