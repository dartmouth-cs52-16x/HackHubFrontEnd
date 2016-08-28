import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import Announcement from './announcement';
import NewAnnouncement from './new_announcement';
import { createAnnouncement, deleteAnnouncement, fetchAnnouncements } from '../actions/index';

class Announcements extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.createAnnouncement = this.createAnnouncement.bind(this);
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    this.renderAnnouncementBar = this.renderAnnouncementBar.bind(this);
    this.renderAnnouncements = this.renderAnnouncements.bind(this);
  }

  componentWillMount() {
    this.props.fetchAnnouncements();
  }

  componentWillReceiveProps(nextProps) {
  }

  // create a new note
  createAnnouncement(input) {
    const roleList = document.getElementById('role').checked;
    console.log(roleList);
    const newAnn = { text: input, date: 'DATE' };
    this.props.createAnnouncement(newAnn);
  }

  deleteAnnouncement(id) {
    this.props.deleteAnnouncement(id);
  }

  renderAnnouncements() {
    if (this.props.all == null) {
      return null;
    }
    const renderList = this.props.all.map((ann) => {
      return (
        <div key={ann.id} className="">
          <Announcement text={ann.text} date={ann.date} id={ann.id} delete={this.deleteAnnouncement} />
        </div>
      );
    });
    return renderList;
  }

  renderAnnouncementBar() {
    if (this.props.role === 'organizer') {
      return (
        <div className="col-md-10 col-md-offset-1 mainpage">
          <div className="compname">
            <b>Announcements</b>
          </div>
          <NewAnnouncement createAnnouncement={this.createAnnouncement} />
          <form action="">
            <input type="checkbox" id="role" value="hacker"></input> Hacker &nbsp;
            <input type="checkbox" id="role" value="recruiter"></input> Recruiter
          </form>
        </div>
      );
    } else {
      return (
        <div className="compname">
          <b>Announcements</b>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="announcements">
        {this.renderAnnouncementBar()}
        <div>
          {this.renderAnnouncements()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.announcements.all,
    role: state.auth.role,
  }
);


export default connect(mapStateToProps, { createAnnouncement, deleteAnnouncement, fetchAnnouncements })(Announcements);
