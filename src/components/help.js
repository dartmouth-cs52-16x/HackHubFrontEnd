// form to ask for help!!
// use an api for scheduling

import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
// import { connect } from 'react-redux';
// import { createCompany } from '../actions/index';

class Help extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    const fields = {
      // message: document.getElementById('compname').value,
    };
    // this.props.sendHelpMessage(fields);
  }
  render() {
    return (
      <div>
        <div className="col-md-10 col-md-offset-1">
          <h1>Need Help?</h1>
          <div className="dropdown">
            <span>Category:</span>
            <button className="dropbtn">Choose Your Category</button>
            <div className="dropdown-content">
              <a href="#">Traveling</a>
              <a href="#">Financial issues</a>
              <a href="#">Accomodation</a>
              <a href="#">Others</a>
            </div>
          </div>

          <form>
            <textarea id="text" placeholder="Type in your questions..." rows="20" cols="80" />
          </form>
        </div>

        <button className="btn btn-primary col-md-2 col-md-offset-9" onClick={this.onButtonClick}>Send</button>
      </div>
    );
  }
}

export default Help;
