import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import EmailIcon from 'material-ui-icons/Email';
import LockIcon from 'material-ui-icons/Lock';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const renderEmail = ({ classes, input, type, meta: { touched, error } }) => {
  return (
    <FormControl fullWidth className="mb24">
      <InputLabel>Email</InputLabel>
      <Input {...input} type={type} endAdornment={
        <InputAdornment position="end">
          <EmailIcon color="primary" />
        </InputAdornment>
      } />
    </FormControl>
  )
}

const renderPassword = ({ classes, input, type, meta: { touched, error } }) => {
  return (
    <FormControl fullWidth className="mb24">
      <InputLabel>Password</InputLabel>
      <Input {...input} type={type} endAdornment={
        <InputAdornment position="end">
          <LockIcon color="primary" />
        </InputAdornment>
      }/>
    </FormControl>
  )
}

class Signin extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <form>
          <Typography variant="display1" align="center" className="mb24">
              Login
          </Typography>

          <Field
            name="phone"
            type="text"
            component={renderEmail}
            classes={classes}
          />

          <Field
            name="password"
            type="password"
            component={renderPassword}
            classes={classes}
          />

          <p>
            <Button variant="raised" color="primary">
              login
            </Button>
          </p>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'Signin' })(connect( state => ({  }), { })(withRouter(Signin)));