import React from 'react';
import { Route } from 'react-router-dom';

import LoginLayout from '../views/layouts/Login';

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
          <Component {...matchProps} />
      </LoginLayout>
    )} />
  )
};

export default LoginLayoutRoute;