import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import EmailIcon from 'material-ui-icons/Email';

const renderEmail = ({ classes, input, type, meta: { touched, error } }) => {
  return (
    <FormControl fullWidth className="mb24">
      <InputLabel>Email</InputLabel>
      <Input {...input} type={type} endAdornment={
        <InputAdornment position="end">
          <EmailIcon />
        </InputAdornment>
      } />
    </FormControl>
  )
}

class Signin extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <form>
          <Typography type="title" align="center" className="mb24">
              Login
          </Typography>

          <Field
            name="phone"
            type="text"
            component={renderEmail}
            classes={classes}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'Signin' })(connect( state => ({  }), { })(withRouter(Signin)));