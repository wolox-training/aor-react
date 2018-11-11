import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import formReducer from './redux/form/reducer';
import reducerAuth from './redux/auth/reducer';

const rootStore = combineReducers({
  form: formReducer,
  auth: reducerAuth
});

const store = createStore(rootStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
