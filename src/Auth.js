import React, { Component } from 'react';
import * as AuthAPI from './AuthorizeApi';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
  state = {
    email: '',
    password: '',
    isAutorisationError: false,
    isAuthorized: false,
  };
  handleSubmit = () => {
    const { email, password } = this.state;
    const isAuthorized = AuthAPI.authorizeUser(email, password);
    this.setState({ isAutorisationError: !isAuthorized, isAuthorized });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        {this.state.isAuthorized ? <Redirect to="/" /> : null}
        <input
          name="email"
          placeholder="enter email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br/> <br/>
        <input
          name="password"
          placeholder="enter password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br/> <br/>
        {this.state.isAutorisationError ?  <p className="error">Invalid password or login</p> : null}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Auth;