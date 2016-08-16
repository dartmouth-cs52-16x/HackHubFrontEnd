
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';
import { Link } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.submitSignin = this.submitSignin.bind(this);
  }

  // update username input
  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  // update password input
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  // submit signin
  submitSignin() {
    this.props.signinUser(this.state.username, this.state.password);
  }

  // render function
  render() {
    return (
      <div className="signinbox">
        <h1>
          Signin Here:
        </h1>
        <div className="usernamerow">
          Username: <input value={this.state.username} onChange={this.onUsernameChange} />
        </div>
        <div className="passwordrow">
          Password: <input value={this.state.password} onChange={this.onPasswordChange} />
        </div>
        <div>
          <button onClick={this.submitSignin}>Submit</button>
        </div>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
  }
);

export default connect(mapDispatchToProps, { signinUser })(SignIn);
