import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions';

// example class based component (smart component)
class UserProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };
  }
  render() {
    return (
      <div id="userProfile">
        <h1>this.props.fullname</h1>
        <img alt="profile" />
        <h3>this.props.email</h3>
        <h3>this.props.website</h3>
        <h3>this.props.linkedin</h3>
        <h4>this.props.about</h4>
        <h4>this.props.skills</h4>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => (
  {
    user: state.user.profile,
  }
);

export default connect(mapDispatchToProps, { fetchProfile })(UserProfile);
