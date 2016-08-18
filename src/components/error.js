// error page -- triggered during axios error

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="errorbox">
        <h1>Sorry! We ran into an error with the server.</h1>
        <p>Please return to the home page and try again!</p>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
  }
);

export default connect(mapDispatchToProps, { })(Error);
