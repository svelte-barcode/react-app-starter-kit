import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom'

import App from '../views/layouts/App';
import Home from '../views/homes/index';
import Login from '../views/auth/sessions/new';
import User from '../views/users';

export default (
  <BrowserRouter>
    <div>
      <App>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Route path='/signin' component={Login} />
      </App>
    </div>
  </BrowserRouter>
);