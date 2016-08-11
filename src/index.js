import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from './reducers';

import './style.scss';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

// const store = createStore(reducers, {}, compose(
//   applyMiddleware(),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ));


// entry point that just renders app
// could be used for routing at some point
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />
  , document.getElementById('main'));
