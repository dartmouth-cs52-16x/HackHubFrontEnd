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
        <div>
          <EventList />
        </div>
        <div className="eventPage">
          <NavBar />
          {this.props.children}
        </div>
        <div className="footer">
          <li>HackHub</li>
          <li>Connect with us</li>
          <i className="fa fa-twitter footer_item" aria-hidden="true"> </i>
          <i className="fa fa-facebook-square footer_item" aria-hidden="true"> </i>
        </div>
      </div>
    );
  }
}

export default App;
