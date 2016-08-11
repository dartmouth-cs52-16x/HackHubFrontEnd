// navbar component -- home and new post buttons

import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/schedule" className="navitem">SCHEDULE </Link>
        <Link to="/announcement" className="navitem">ANNOUNCEMENTS </Link>
        <Link to="/companies" className="navitem">COMPANIES </Link>
        <Link to="/chat" className="navitem">CHAT </Link>
        <Link to="/help" className="navitem">HELP </Link>
      </div>
    );
  }
}

export default NavBar;
