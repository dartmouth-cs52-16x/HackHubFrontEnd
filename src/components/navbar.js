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
        <Link to="/signout" className="navbutton navitem">
          <p onClick={this.submitSignout}>Sign Out</p>
        </Link>
      );
    } else {
      return (
        <Link to="/signin">Sign In</Link>
      );
    }
  }

  render() {
    return (
      <div className="myNav">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">HackHub</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <ul className="nav navbar-nav navbar-right">
                <li>{this.renderSign()}</li>
                <li><Link to="/my_profile">My Profile</Link></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">HackDartmouth III<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/announcements">Announcements</Link></li>
                    <li><Link to="/companies">Companies</Link></li>
                    <li><Link to="/directory">Directory</Link></li>
                    <li><Link to="/help">Help</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
    authenticated: state.auth.authenticated,
    user: state.user,
  }
);

export default connect(mapDispatchToProps, { signoutUser })(NavBar);
