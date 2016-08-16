
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';
import { Link } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  // update username input
  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  // update password input
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  // submit signup
  submitSignup() {
    this.props.signupUser(this.state.username, this.state.password);
  }

  // render function
  render() {
    return (
      <div className="signupbox">
        <h1>
          Signup Here:
        </h1>
        <div className="usernamerow">
          Username: <input value={this.state.username} onChange={this.onUsernameChange} />
        </div>
        <div className="passwordrow">
          Password: <input value={this.state.password} onChange={this.onPasswordChange} />
        </div>
        <div>
          <button onClick={this.submitSignup}>Submit</button>
        </div>
        <Link to="/signin">Sign In</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
  }
);

export default connect(mapDispatchToProps, { signupUser })(SignUp);
