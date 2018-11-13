import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from '../localStorage';

import formReducer from './form/reducer';
import reducerAuth from './auth/reducer';

const rootStore = combineReducers({
  form: formReducer,
  auth: reducerAuth
});

const persistState = loadState();

const store = createStore(rootStore, persistState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});

export default store;
