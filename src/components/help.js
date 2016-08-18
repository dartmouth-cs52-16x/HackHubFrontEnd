// form to ask for help!!
// use an api for scheduling

import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
// import { createCompany } from '../actions/index';

class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'Choose Your Category',
      text: '',
    };

    this.onTravelingChange = this.onTravelingChange.bind(this);
    this.onFinancialChange = this.onFinancialChange.bind(this);
    this.onAccomodationChange = this.onAccomodationChange.bind(this);
    this.onOthersChange = this.onOthersChange.bind(this);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onTravelingChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Traveling',
    });
  }

  onFinancialChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Financial Issues',
    });
  }

  onAccomodationChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Accomodation',
    });
  }

  onOthersChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Others',
    });
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
            <button className="dropbtn">{this.state.category}</button>
            <div className="dropdown-content">
              <a onClick={this.onTravelingChange}>Traveling</a>
              <a onClick={this.onFinancialChange}>Financial Issues</a>
              <a onClick={this.onAccomodationChange}>Accomodation</a>
              <a onClick={this.onOthersChange}>Others</a>
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
