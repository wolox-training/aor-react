import userService from '@config/api';

const delay = time => new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, time);
});

async function service(payload) {
  await delay(2000);
  return userService.post('/Users/login', {
    email: payload.email,
    password: payload.password
  });
}

export default service;
