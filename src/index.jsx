import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import router from './router';

import './styles/app.css';

import { createStore } from 'redux';
import reducers from './reducers';

import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware( thunk, logger() );

const store = createStore(reducers, middleware);

render(
  <Provider store={store} >{router}</Provider>,
  document.getElementById('root')
);
