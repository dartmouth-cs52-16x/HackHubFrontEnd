import React, { Component } from 'react';
// import { Link } from 'react-router';
import NewAnnouncement from './new_announcement';

class Announcement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: [],
      test: null,
    };

    this.createAnnouncement = this.createAnnouncement.bind(this);
    this.renderAnnouncements = this.renderAnnouncements.bind(this);
  }

  // create a new note
  createAnnouncement(input) {
    this.state.announcements.push(input);
    const newTest = input;
    this.setState({
      test: newTest,
    });
  }

  renderAnnouncements() {
    const renderList = this.state.announcements.map(text => {
      return (
        <div key={text} className="announcementsingle">
          <div className="announcetext">
            {text}
          </div>
          <div className="announcedate">
            DATE
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

export default Announcement;
