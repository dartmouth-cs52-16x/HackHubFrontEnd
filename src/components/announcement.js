// the component for a single announcement

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Announcement extends Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderGroup = this.renderGroup.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // delete the announcement
  onDeleteClick(event) {
    this.props.delete(this.props.id);
  }

  // render delete button (only organizers can see)
  renderDelete() {
    if (this.props.role !== 'organizer') {
      return null;
    }
    return (
      <p onClick={this.onDeleteClick}>x</p>
    );
  }

  // render group display (only organizer can see)
  renderGroup() {
    let role = 'both';
    if (!this.props.hacker) {
      role = 'recruiter';
    } else if (!this.props.recruiter) {
      role = 'hacker';
    }
    if (this.props.role !== 'organizer') {
      return null;
    }
    return (
      <div className="announcegroup">
        {this.renderDelete()}
        Group: {role}
      </div>
    );
  }

  // render announcement
  render() {
    return (
      <div className="col-md-10 col-md-offset-1 announcementsingle">
        <div>
          <div className="announcetext">{this.props.text}</div>
          <div className="announcedate">{this.props.date}</div>
        </div>
        <div>
          {this.renderGroup()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.companies.all,
    user: state.auth.user,
    role: state.auth.role,
  }
);

export default connect(mapStateToProps, {})(Announcement);
