import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

import App from './components/App';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import SecretPage from './components/SecretPage';

const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => user.data === null && user.isLoading === false,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
  allowRedirectBack: false
})

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  authenticatingSelector: state => state.user.isLoading,
  LoadingComponent: () => <h1>...LOADING...</h1>
});

export default (
  <Route path="/" component={App}>
    <Route path="login" component={UserIsNotAuthenticated(LoginPage)} />
    <IndexRoute component={HomePage} />
    <Route path="secret" component={UserIsAuthenticated(SecretPage)} />
  </Route>
);
