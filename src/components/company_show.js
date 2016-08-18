// show page -- show a specific post in full

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompany } from '../actions/index';

class CompanyShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
      website: '',
      recruiter: '',
    };
  }

  componentWillMount() {
    this.props.fetchCompany(this.props.params.id);
  }

  // render function
  render() {
    if (this.props.thisCompany == null) {
      // if company not yet fetched
      return (
        <div>Loading...</div>
      );
    }
    console.log(this.props.thisCompany);
    // state not initialized, use this.props.currentPost
    return (
      <div className="companyprofile" >
        <div className="namerow">
          <b>Name:</b> {this.props.thisCompany.name}
        </div>
        <div className="imagerow">
          <b>Image:</b> {this.props.thisCompany.image}
        </div>
        <div className="websiterow">
          <b>Website:</b> {this.props.thisCompany.website}
        </div>
        <div className="recruiterrow">
          <b>Recruiter:</b> {this.props.thisCompany.recruiter}
        </div>
        <div className="addjob">
          Add a job/internship listing:
        </div>
        <div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
    thisCompany: state.companies.comp,
  }
);

export default connect(mapDispatchToProps, { fetchCompany })(CompanyShow);
