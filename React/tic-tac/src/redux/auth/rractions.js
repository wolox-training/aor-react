import Service from '@services/UserService';
import { createTypes } from 'redux-recompose';

// export const actions = { LOGIN: 'LOGIN', LOGOUT: 'LOGOUT' };

export const actions = createTypes(['LOGIN', 'GET_LOGIN_SUCESS', 'GET_LOGIN_ERROR', 'GET_LOGOUT'], '@AUTH');

const privateActionCreators = {
  login: (state = { loggedIn: false }) => ({
    ...state,
    type: actions.LOGIN,
    target: 'loggedIn'
  }),
  getLoginSuccess: payload => ({
    type: actions.GET_LOGIN_SUCESSS,
    target: 'loggedIn',
    payload
  }),
  getLoginError: payload => ({
    type: actions.GET_LOGIN_ERROR,
    target: 'loggedIn',
    payload
  }),
  // TODO change under
  getLogout: state => ({
    type: actions.GET_LOGOUT,
    target: 'loggedIn',
    payload: state
  })
};

const actionCreators = {
  logIn: payload => async dispatch => {
    // Puts loadingMatches in true
    dispatch({ type: actions.LOGIN });
    // -> api.get('/matches');
    const response = await Service(payload);
    if (response.ok) {
      // Stores matches, put loading in false
      dispatch(privateActionCreators.getLoginSuccess({ loggedIn: true }));
    } else {
      // Store the error, put loading in false
      dispatch(privateActionCreators.getLoginError({ loggedIn: false }));
      throw new Error();
    }
  },
  logOut: () => ({
    type: actions.LOGOUT
  })
};

export default { actionCreators };
