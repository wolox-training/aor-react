import UserService from '@config/api';
import LogInTrue from '@redux/auth/actions';

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
