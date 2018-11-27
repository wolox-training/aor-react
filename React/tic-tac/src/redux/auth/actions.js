import Service from '@services/UserService';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes(['LOGIN'], ['LOGOUT']), '@AUTH');

const actionCreators = {
  logIn: payload => ({
    type: actions.LOGIN,
    service: Service,
    payload,
    target: 'user',
    successSelector: response => response.data.id
  }),
  logOut: () => ({
    type: actions.LOGOUT,
    target: 'user',
    payload: false
  })
};

export default actionCreators;
