// the entry bar to create a new note with a title
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCompany } from '../actions/index';

class NewCompanyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick(event) {
    const fields = { name: document.getElementById('compname').value,
      image: document.getElementById('complink').value,
      website: document.getElementById('compsite').value,
      recruiter: document.getElementById('comprecruiter').value,
    };
    if ((fields.name === '') || (fields.image === '') ||
    (fields.website === '') || (fields.recruiter === '')) {
      this.setState({ error: 1 });
    } else {
      this.props.createCompany(fields);
    }
  }
  render() {
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please enter all fields for the company.';
    }
    return (
      <div className="companyprofile">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>New Company Profile</b>
            </div>
          </div>
          <div className="input-group col-md-10 col-md-offset-1 company-profile">
            <input type="text" className="form-control" id="compname" placeholder="Company Name"></input>
            <input type="text" className="form-control" id="complink" placeholder="Image Link"></input>
            <input type="text" className="form-control" id="compsite" placeholder="www.companywebsite.com"></input>
            <input type="text" className="form-control" id="comprecruiter" placeholder="recruiter@company.com"></input>
          </div>
          <button className="submitjob" onClick={this.onButtonClick}>Create Profile</button>
        </div>
        <b><font color="red">{errorText}</font></b>
      </div>
    );
  }
}

export default connect(null, { createCompany })(NewCompanyProfile);
