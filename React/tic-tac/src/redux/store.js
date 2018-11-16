import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { loadState, saveState } from '../localStorage';

import formReducer from './form/reducer';
import reducerAuth from './auth/reducer';

export const history = createBrowserHistory();

const rootStore = combineReducers({
  form: formReducer,
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

// const store = createStore(rootStore, persistState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
});

export default store;
