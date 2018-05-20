import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import App from './containers/App';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise-middleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
       promiseMiddleware(),)
  ),
);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
  , document.querySelector('.container'));