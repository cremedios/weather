import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/reducers';
import App from './components/App'
import Promise from 'promise-polyfill';
// import {getLocalWeather} from './utility/api';

const noop = n => n;

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

const initialState = {
  location : {},
};

const store = createStore(
  reducers,
  initialState,
  compose(
      applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : noop,
    ),
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)