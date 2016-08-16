// navbar component -- home and new post buttons

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/index';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitSignout = this.submitSignout.bind(this);
    this.renderSign = this.renderSign.bind(this);
  }

  submitSignout() {
    this.props.signoutUser();
  }

  renderSign() {
    if (this.props.authenticated) {
      return (
        <Link to="/signout">
          <button className="navbutton navitem" onClick={this.submitSignout}>Sign Out</button>
        </Link>
      );
    } else {
      return (
        <Link to="/signin">
          <button className="navbutton navitem">Sign In</button>
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/schedule" className="navitem">SCHEDULE </Link>
        <Link to="/announcements" className="navitem">ANNOUNCEMENTS </Link>
        <Link to="/companies" className="navitem">COMPANIES </Link>
        <Link to="/chat" className="navitem">CHAT </Link>
        <Link to="/help" className="navitem">HELP </Link>
        {this.renderSign()}
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapDispatchToProps, { signoutUser })(NavBar);
