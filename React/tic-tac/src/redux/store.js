import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { loadState, saveState } from '@services/localStorageService';

import reducerAuth from './auth/reducer';

export const history = createBrowserHistory();

const rootStore = combineReducers({
  form,
  auth: reducerAuth
});

const persistState = loadState();

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootStore),
  persistState, // new root reducer with router state
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);
/* eslint-enable */

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});

export default store;
