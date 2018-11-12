import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import formReducer from './form/reducer';
import reducerAuth from './auth/reducer';

const rootStore = combineReducers({
  form: formReducer,
  auth: reducerAuth
});

const store = createStore(rootStore, applyMiddleware(thunk));

export default store;
