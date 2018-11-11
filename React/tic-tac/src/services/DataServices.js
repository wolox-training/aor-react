import api from '../../../../../LoopBack';

export default {
  getLogin: (email, password) => api.post('/User/login', { email, password })
};
