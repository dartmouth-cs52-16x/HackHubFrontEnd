import React, { Component } from 'react';
import { connect } from 'react-redux';

class Job extends Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // calllback to app
  onDeleteClick(event) {
    this.props.delete(this.props.id);
  }

  // render announcement
  render() {
    let deleteButton = '';
    if (this.props.user && this.props.user.role === 'recruiter') {
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
          <b>Link:</b> {this.props.link}
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
  }
);

export default connect(mapStateToProps, {})(Job);

// export default Job;
