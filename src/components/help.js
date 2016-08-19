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

    this.onTravelChange = this.onTravelChange.bind(this);
    this.onScheduleChange = this.onScheduleChange.bind(this);
    this.onFoodChange = this.onFoodChange.bind(this);
    this.onFinancialChange = this.onFinancialChange.bind(this);
    this.onAccomodationChange = this.onAccomodationChange.bind(this);
    this.onGeneralChange = this.onGeneralChange.bind(this);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onTravelChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Travel',
    });
  }

  onScheduleChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Schedule',
    });
  }

  onFoodChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Food',
    });
  }

  onFinancialChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Financial',
    });
  }

  onAccomodationChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'Accomodation',
    });
  }

  onGeneralChange(event) {
    // change the button text
    event.preventDefault();
    this.setState({
      category: 'General',
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
      <div className="companyprofile" >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>Questions? Comments? Need Help?</b>
              <p>Contact your Hackathon organizers through the form below.</p>
            </div>
            <div className="dropdown">
              <div>
                Category:
              </div>
              <button className="dropbtn">{this.state.category}</button>
              <div className="dropdown-content">
                <a onClick={this.onTravelChange}>Travel</a>
                <a onClick={this.onScheduleChange}>Schedule</a>
                <a onClick={this.onFoodChange}>Food</a>
                <a onClick={this.onFinancialChange}>Financial</a>
                <a onClick={this.onAccomodationChange}>Accomodation</a>
                <a onClick={this.onGeneralChange}>General</a>
              </div>
            </div>
            <form className="input-group col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-1 help">
              <b>Message:</b>
              <div className="input-group">
                <Textarea id="text" placeholder="Type in your questions/concerns here" rows="10" cols="80" />
              </div>
              <b>Note: a response will be sent to the email address on your profile. If necessary, indicate a separate address where you would like to be contacted in response to this message.</b>
              <br></br>
              <div className="input-group col-md-10 col-md-offset-1">
                <input type="text" className="form-control" id="emailhelp"></input>
              </div>
            </form>
            <button className="submitjob" onClick={this.updateUser}>Update</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
