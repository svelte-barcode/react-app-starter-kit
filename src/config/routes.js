import React from 'react';
import { BrowserRouter, Route, Link, Match, Redirect, Switch } from 'react-router-dom';

import AppLayout from '../views/layouts/App';
import LoginLayout from '../views/layouts/Login';
import Home from '../views/homes/index';
import Login from '../views/auth/sessions/new';
import User from '../views/users';

const AppLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AppLayout>
          <Component {...matchProps} />
      </AppLayout>
    )} />
  )
};

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
          <Component {...matchProps} />
      </LoginLayout>
    )} />
  )
};

export default (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>

        <LoginLayoutRoute path="/signin" component={Login} />
        
        <AppLayoutRoute path="/homes" component={Home} />

        <AppLayoutRoute path="/users" component={User} />
      </Switch>
    </div>
  </BrowserRouter>
);
