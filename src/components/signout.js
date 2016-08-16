
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="signoutbox">
        <h1>You have now signed out!</h1>
        <p>Please sign in again if you wish to post.</p>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
  }
);

export default connect(mapDispatchToProps, { })(SignOut);
