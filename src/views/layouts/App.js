import React from 'react';

import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Header from '../../components/Header';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class App extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <Grid container>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Header />
            <main className={classes.content}>
              <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
          </div>
        </div>
      </Grid>
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);