import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import { signupUser } from '../actions/index';

// example class based component (smart component)
class Signin extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      fullname: '',
      email: '',
      password: '',
    };

    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullname: event.target.value,
    });
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
    const user = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signupUser(user);
    browserHistory.push('/signin');
  }


  render() {
    return (
      <div className="signupbox col-md-6 col-md-offset-3">
        <h1>
          Sign Up:
        </h1>
        <div className="fullnamerow">
          Full Name: <input value={this.state.fullname} onChange={this.changeFullName} />
        </div>
        <div className="emailrow">
          Email: <input value={this.state.email} onChange={this.changeEmail} />
        </div>
        <div className="passwordrow">
          Password: <input value={this.state.password} onChange={this.changePassword} />
        </div>
        <br />
        <div>
          <button onClick={this.submitForm}>Submit</button>
        </div>
        <Link to="/signin">Sign In</Link>
      </div>
    );
  }
}

export default connect(null, { signupUser })(Signin);
