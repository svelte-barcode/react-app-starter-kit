import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import routes from './config/routes';

import { MuiThemeProvider } from 'material-ui/styles';
import configureTheme from './theme/configureTheme';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const theme = configureTheme()

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      {routes}
    </Provider>
  </MuiThemeProvider>
, document.getElementById('root'))

registerServiceWorker();
