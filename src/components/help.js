// form to ask for help!!
// use an api for scheduling

import React, { Component } from 'react';
// import { createCompany } from '../actions/index';
import { browserHistory } from 'react-router';

class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
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
    browserHistory.push('/helpdone');
    // const fields = {
    //   // message: document.getElementById('compname').value,
    // };
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
            <form className="input-group col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-1 help">
              <div className="form-group">
                <b>Message:</b>
                <textarea className="form-control" id="exampleTextarea"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelect1">Category</label>
                <select className="form-control" id="exampleSelect1">
                  <option onClick={this.onGeneralChange}>General</option>
                  <option onClick={this.onTravelChange}>Travel</option>
                  <option onClick={this.onScheduleChange}>Schedule</option>
                  <option onClick={this.onFoodChange}>Food</option>
                  <option onClick={this.onFinancialChange}>Financial</option>
                  <option onClick={this.onAccomodationChange}>Accomodation</option>
                </select>
              </div>
              <div className="form-group">
                <b>Note: a response will be sent to the email address on your profile. If necessary, indicate a separate address where you would like to be contacted in response to this message.</b>
                <br></br>
                <input type="text" className="form-control" id="emailhelp"></input>
              </div>
            </form>
            <button className="submitjob" onClick={this.onButtonClick}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
