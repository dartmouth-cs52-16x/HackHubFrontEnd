import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import { signinUser } from '../actions/index';

// example class based component (smart component)
class Signin extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      password: '',
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
    this.props.signinUser(this.state.email, this.state.password);
    browserHistory.push('/');
  }


  render() {
    return (
      <div className="signupbox col-md-6 col-md-offset-3">
        <h1>
          Login
        </h1>
        <div className="usernamerow">
          Email: <input value={this.state.email} onChange={this.changeEmail} />
        </div>
        <div className="passwordrow">
          Password: <input value={this.state.password} onChange={this.changePassword} />
        </div>
        <div>
        <button onClick={this.submitForm}>Login</button>
        </div>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default connect(null, { signinUser })(Signin);
