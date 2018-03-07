# React App Starter Kit

React Starter Kit is a React framework base on create-react-app built on top of React, React-redux, Redux-form, Redux-thunk, Material-ui, React-router &   GraphQL (Addition NodeJS, ExpressJS). Helping you to stay productive following the best practices.

React App Starter Kit is a solid starting point for both professionals and newcomers to the Javascript world.

![React App Starter Kit](https://github.com/reactappstarterkit/reactappstarterkit.github.io/blob/master/images/signin-screen.png "React App Starter Kit")

## Folder structure

```
react-app-starter-kit
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── assets
    └── components
    └── containers
    └── actions
    └── config
    └── constants
    └── reducers
    └── utils
    └── theme
    ├── views
    │   └── layouts
    └── index.js
    └── registerServiceWorker.js
```

## Layout

react-app-starter-kit come with App and Login layout by default, with most of the options to render, the rendered content is displayed as part of the current layout. You'll learn more about layouts and how to use them in this guide.

You can use the `AppLayoutRoute` or `LoginLayoutRoute` option to tell react-app-starter-kit to use a specific layout for the current component:

```
<LoginLayoutRoute path="/signin" component={Login} />
```

```
<AppLayoutRoute path="/homes" component={Home} />
```

You can create a new layout by creating a layout file in `src/views/layouts` folder and follow the code in App.js or Login.js.

```
// Report.js

import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
  
const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 7
  },
  center: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  }
});

class Report extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24} alignItems={'center'} justify={'center'} direction={'row'} className={classes.container}>
          <Grid item xs={6} sm={3} className={classes.center}>
            {this.props.children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Report.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Report);
```

And then create a layout route in `src/config` folder and follow files `appLayoutRoute.js` or `loginLayoutRoute.js` 

```
// reportLayoutRoute.js

import React from 'react';
import { Route } from 'react-router-dom';

import ReportLayout from '../views/layouts/Report';

const ReportLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <ReportLayoutLayout>
          <Component {...matchProps} />
      </AppLayout>
    )} />
  )
};

export default AppLayoutRoute;
```

## Router

Router recognizes URLs and dispatches them to a view. It can also generate paths and URLs.

You can generate paths, URLs and render a component by using a specific layout route in file `src/config/routes.js`:

```
<ReportLayoutRoute path="/reports" component={Report} />
```

You also can set the default paths, URLs:

```
<Route exact path="/">
    <Redirect to="/reports" />
</Route>
```

## Contributing

We'd love to have your helping hand on react-app-starter-kit!

Your contributions are heartily ♡ welcome. (✿◠‿◠)

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)