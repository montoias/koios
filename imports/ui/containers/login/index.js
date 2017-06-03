import React, { Component } from 'react';
import { User } from '../../api/user';

export default class Login extends Component {
  login() {
    User.loginWithFacebook();
  }

  render() {      
    return (
      <div onClick={this.login.bind(this)}>Login with Facebook</div>
    )
  }
}