import React, { Component } from 'react';

export default class Login extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
