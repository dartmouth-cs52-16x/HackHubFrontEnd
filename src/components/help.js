// form to ask for help!!
// use an api for scheduling

import React, { Component } from 'react';
// import { createCompany } from '../actions/index';
// import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { createHelp, fetchHelp, deleteHelp } from '../actions';
import HelpSingle from './helpsingle';

class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'General',
      text: '',
      user: null,
      all: [],
    };

    this.onTravelChange = this.onTravelChange.bind(this);
    this.onScheduleChange = this.onScheduleChange.bind(this);
    this.onFoodChange = this.onFoodChange.bind(this);
    this.onFinancialChange = this.onFinancialChange.bind(this);
    this.onAccomodationChange = this.onAccomodationChange.bind(this);
    this.onGeneralChange = this.onGeneralChange.bind(this);
    this.deleteHelp = this.deleteHelp.bind(this);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchHelp();
    // this.props.fetchUser(localStorage.getItem('id'));
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     user: nextProps.user.user,
  //   });
  // }

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
    event.preventDefault();
    const message = document.getElementById('messageTextarea').value;
    if (message.length === 0) {
      document.getElementById('error').style.display = 'block';
    } else {
      const fields = {
        message,
        category: document.getElementById('exampleSelect1').value,
        id: this.props.id,
      };
      this.props.createHelp(fields);
    }
  }

  deleteHelp(id) {
    this.props.deleteHelp(id);
  }

  render() {
    if (this.props.all === null) {
      return null;
    }
    if (this.props.id === null) {
      return null;
    }

    // user's id is id, help's id is helpid
    if (this.props.role === 'organizer') {
      const renderList = this.props.all.map((help) => {
        return (
          <div key={help.helpid} className="">
            <HelpSingle message={help.message} category={help.category} helpid={help.helpid} id={help.id} delete={this.deleteHelp} />
          </div>
        );
      }); // need to change key???
      return (
        <div className="companyprofile">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
              <div className="compname">
                <b>Help Messages:</b>
              </div>
              <div className="helplist">
                {renderList}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
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
                  <b id="error"><font color="red">Please enter a message.</font></b>
                  <br></br>
                  <b>Message:</b>
                  <textarea className="form-control" id="messageTextarea"></textarea>
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
                  <b>Note: a response will be sent to the email address on your profile.</b>
                </div>
                <button className="submitjob" onClick={this.onButtonClick}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.help.all,
    id: state.auth.id,
    role: state.auth.role,
  }
);

export default connect(mapStateToProps, { createHelp, fetchHelp, deleteHelp })(Help);
