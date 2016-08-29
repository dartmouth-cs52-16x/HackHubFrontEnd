// component for a single job

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Job extends Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // delete the job
  onDeleteClick(event) {
    this.props.delete(this.props.id);
  }

  // render job
  render() {
    // only recruiters of the company or organizers can view delete button
    let deleteButton = '';
    if (this.props.company === this.props.thisCompany.name || this.props.role === 'organizer') {
      deleteButton = (
        <i className="fa fa-times" aria-hidden="true" onClick={this.onDeleteClick}></i>
      );
    }

    return (

      <div className="col-md-10 col-md-offset-1 jobsingle">
        <div>
          <b>Job:</b> {this.props.name}
        </div>
        <div>
          <b>Description:</b> {this.props.desc}
        </div>
        <div>
          <a id="link" href={this.props.link}>Click here for more info!</a>
        </div>
        {deleteButton}
      </div>
    );
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.companies.all,
    user: state.auth.user,
    role: state.auth.role,
    thisCompany: state.companies.comp,
    company: state.auth.company,
  }
);

export default connect(mapStateToProps, {})(Job);

// export default Job;
