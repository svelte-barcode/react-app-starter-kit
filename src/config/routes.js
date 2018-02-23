import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom'

import App from '../views/layouts/App';
import Home from '../views/homes/index';

export default (
  <BrowserRouter>
    <div>
      <App>
        <Route exact path='/homes' component={Home} />
      </App>
    </div>
  </BrowserRouter>
);