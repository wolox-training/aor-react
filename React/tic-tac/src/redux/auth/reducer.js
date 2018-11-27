import { createReducer, completeReducer } from 'redux-recompose';
import { actions } from '@redux/auth/actions';
import onReadValue from 'redux-recompose/lib/effects/onReadValue';

const defaultState = {
  user: null
};

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.LOGOUT]: onReadValue()
  }
};

export default createReducer(defaultState, completeReducer(reducerDescription));
