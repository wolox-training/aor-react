import UserService from '@config/api';

function service(payload) {
  return UserService.post('/Users/login', {
    email: payload.email,
    password: payload.password
  });
}

export default service;
