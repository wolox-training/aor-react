import UserService from '@config/api';
import LogInTrue from '@redux/auth/actions';

function LogIn(payload) {
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
        // eslint-disable-next-line
        alert("Error al iniciar sesión");
      });
  };
}

export default LogIn;
