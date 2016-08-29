// the general app component

import React, { Component } from 'react';
import NavBar from './navbar';
import '../style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <NavBar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
