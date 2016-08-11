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

  componentWillReceiveProps(nextProps) {
    console.log('newState');
  }

  // create a new note
  createAnnouncement(input) {
    const newAnn = { text: input, date: 'DATE' };
    this.props.createAnnouncement(newAnn);
  }

  renderAnnouncements() {
    if (this.props.all == null) {
      return null;
    }
    const renderList = this.props.all.map((ann) => {
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
    console.log('rendering');
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

const mapStateToProps = (state, action) => (
  {
    all: state.announcements.all,
  }
);

export default connect(mapStateToProps, { createAnnouncement, fetchAnnouncements })(Announcement);
