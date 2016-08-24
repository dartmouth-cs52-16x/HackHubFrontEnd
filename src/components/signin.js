import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { signinUser } from '../actions/index';

// example class based component (smart component)
class Signin extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      password: '',
      error: 0,
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  submitForm() {
    // submit only if no field is empty (or just spaces)
    if (this.state.email.trim().length > 0 && this.state.password.trim().length > 0) {
      this.props.signinUser(this.state.email, this.state.password);
    } else {
      this.setState({
        error: 1,
      });
    }
  }


  render() {
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please fill out all fields';
    }
    return (
      <div className="signupbox col-md-6 col-md-offset-3">
        <h1>
          Login
        </h1>
        <div className="usernamerow">
          <div>Email</div>
          <input value={this.state.email} onChange={this.changeEmail} />
        </div>
        <div className="passwordrow">
          <div>Password</div>
          <input value={this.state.password} onChange={this.changePassword} />
        </div>
        <div className="loginbutton">
          <button className="submitjob" onClick={this.submitForm}>Login</button>
        </div>
        <div>
          <Link id="link" to="/signup">Sign Up</Link>
        </div>
        <div>
          <b><font color="red">{errorText}</font></b>
        </div>
      </div>
    );
  }
}

export default connect(null, { signinUser })(Signin);
