import Service from '@services/UserService';
import { createTypes } from 'redux-recompose';

export const actions = createTypes(['LOGIN', 'LOGOUT'], '@AUTH');

const actionCreators = {
  logIn: payload => ({
    type: actions.LOGIN,
    service: Service,
    payload,
    target: 'user',
    successSelector: response => response.data.id,
    failureSelector: response => true
  }),
  logOut: () => ({
    type: actions.LOGOUT,
    target: 'user',
    payload: { state: false }
  })
};

export default actionCreators;
