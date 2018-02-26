import React from 'react';
import { BrowserRouter, Route, Link, Match, Redirect, Switch } from 'react-router-dom';

import LoginLayoutRoute from './loginLayoutRoute';
import AppLayoutRoute from './appLayoutRoute';

import Login from '../views/auth/sessions/new';
import Home from '../views/homes/index';
import User from '../views/users';

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
