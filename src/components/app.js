import React, { Component } from 'react';
import EventList from './eventList';
// import EventPage from './eventPage';
import NavBar from './navbar';
// import debounce from 'lodash.debounce';
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
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
