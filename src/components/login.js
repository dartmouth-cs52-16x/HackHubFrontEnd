import React from 'react';
import { Form, Input } from 'react-form';
import { Password, Text } from 'react-form-inputs';

const LoginForm = React.createClass({
  render() {
    return (
      <Form {...this.props} for="user">
        <h1>Login</h1>
        <Input type={Text} for="username" placeholder="Username" />
        <Input type={Password} for="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </Form>
    );
  },
});

var user = {
  username: null,
  password: null,
};

React.render(<LoginForm object={user} />, document.getElementById('login'));

export default Welcome;
