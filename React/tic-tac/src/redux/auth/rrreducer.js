import { actions } from '@redux/auth/rractions';

const defaultState = {
  state: false
};

const reducerDescription = {
  [actions.LOGIN]: (state, action) => ({ ...state }),
  [actions.GET_LOGIN_SUCESSS]: (state, action) => action.payload,
  [actions.GET_LOGIN_ERROR]: (state, action) => action.paylaod,
  [actions.GET_LOGOUT]: (state, action) => action.payload
};

function createReducer(initialState, reducerObject) {
  return (state = initialState, action) =>
    (reducerObject[action.type] && reducerObject[action.type](state, action)) || state;
}

export default createReducer(defaultState, reducerDescription);
