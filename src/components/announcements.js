import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewAnnouncement from './new_announcement';
import { createAnnouncement, fetchAnnouncements } from '../actions/index';

class Announcement extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.createAnnouncement = this.createAnnouncement.bind(this);
    this.renderAnnouncements = this.renderAnnouncements.bind(this);
  }

  componentWillMount() {
    this.props.fetchAnnouncements();
  }

  // create a new note
  createAnnouncement(input) {
    const newAnn = { text: input, date: 'DATE' };
    this.props.createAnnouncement(newAnn);
  }

  renderAnnouncements() {
    if (this.props.all.announcements == null) {
      return null;
    }
    const renderList = this.props.all.announcements.all.map((ann) => {
      return (
        <div key={ann.id} className="announcementsingle">
          <div className="announcetext">
            {ann.text}
          </div>
          <div className="announcedate">
            {ann.date}
          </div>
        </div>
      );
    });
    return renderList;
  }


  render() {
    return (
      <div className="announcementbox">
        <NewAnnouncement createAnnouncement={this.createAnnouncement} />
        <div className="allannouncements">
          {this.renderAnnouncements()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
    all: state,
  }
);

export default connect(mapDispatchToProps, { createAnnouncement, fetchAnnouncements })(Announcement);
