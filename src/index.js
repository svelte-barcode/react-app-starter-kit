import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import routes from './config/routes';

import { MuiThemeProvider } from 'material-ui/styles';
import configureStore from './config/store/configureStore';
import configureTheme from './config/theme/configureTheme';

const store = configureStore();

const theme = configureTheme();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      {routes}
    </Provider>
  </MuiThemeProvider>
, document.getElementById('root'))

registerServiceWorker();