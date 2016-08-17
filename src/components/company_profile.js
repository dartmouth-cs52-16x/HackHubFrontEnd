// the entry bar to create a new note with a title
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCompany } from '../actions/index';

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick(event) {
    const fields = { name: document.getElementById('compname').value,
                  link: document.getElementById('complink').value,
                  site: document.getElementById('compsite').value,
                  recruiter: document.getElementById('comprecruiter').value,
                  };
    this.props.createCompany(fields);
  }
  render() {
    return (
      <div>
      <div className="col-md-10 col-md-offset-1">
      <h1>New Company Profile</h1>
      </div>
        <div className="input-group col-md-10 col-md-offset-1 company-profile">
          <input type="text" className="form-control" id="compname" placeholder="Company Name"></input>
          <input type="text" className="form-control" id="complink" placeholder="Image Link"></input>
          <input type="text" className="form-control" id="compsite" placeholder="www.companywebsite.com"></input>
          <input type="text" className="form-control" id="comprecruiter" placeholder="recruiter@company.com"></input>
        </div>
        <button className="btn btn-primary col-md-2 col-md-offset-9" onClick={this.onButtonClick}>Create Profile</button>
      </div>
    );
  }
}

export default connect(null, { createCompany })(CompanyProfile);
