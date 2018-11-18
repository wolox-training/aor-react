import userService from '@config/api';

function service(payload) {
  return userService.post('/Users/login', {
    email: payload.email,
    password: payload.password
  });
}

export default service;
