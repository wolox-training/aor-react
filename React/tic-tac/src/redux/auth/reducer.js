import { createReducer, completeReducer } from 'redux-recompose';
import { actions } from '@redux/auth/actions';

const defaultState = {
  user: null
};

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.LOGOUT]: (state, action) => ({ user: false })
  }
};

export default createReducer(defaultState, completeReducer(reducerDescription));
