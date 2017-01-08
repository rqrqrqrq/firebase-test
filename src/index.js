import React from 'react';
import ReactDOM from 'react-dom';
import * as Firebase from 'firebase';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';

Firebase.initializeApp({
  apiKey: "AIzaSyBfEcFG0Ozg84ozA4b1FR5W1I_tdWUF4DI",
  authDomain: "fir-test-c6024.firebaseapp.com",
  databaseURL: "https://fir-test-c6024.firebaseio.com",
  storageBucket: "fir-test-c6024.appspot.com",
  messagingSenderId: "653542862939"
});

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
