import React from 'react';
import { Route } from 'react-router-dom';

import AppLayout from '../views/layouts/App';

const AppLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AppLayout>
          <Component {...matchProps} />
      </AppLayout>
    )} />
  )
};

export default AppLayoutRoute;