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

class Login extends React.Component {
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

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);