// component for signout page

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
      <div className="companyprofile">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>You have now signed out!</b>
              <p>Please sign in again if you wish to post.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
  }
);

export default connect(mapDispatchToProps, { })(SignOut);
