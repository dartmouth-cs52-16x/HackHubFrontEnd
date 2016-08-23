import React, { Component } from 'react';
import { connect } from 'react-redux';

class Skill extends Component {

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
    // let deleteButton = '';
    // if (this.props.user && this.props.user.role === 'recruiter') {
    const deleteButton = (
      <i className="fa fa-times" aria-hidden="true" onClick={this.onDeleteClick}></i>
    );
    // }

    return (

      <span className="skillsingle">
        {this.props.name} &nbsp;
        {deleteButton}
      </span>
    );
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.companies.all,
    user: state.auth.user,
  }
);

export default connect(mapStateToProps, {})(Skill);

// export default Job;
