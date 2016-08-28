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
      error: 0,
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
    const hackerBool = document.getElementById('hacker').checked;
    const recruitBool = document.getElementById('recruiter').checked;
    if (hackerBool || recruitBool) {
      const newAnn = { text: input, date: 'DATE', hacker: hackerBool, recruiter: recruitBool };
      this.props.createAnnouncement(newAnn);
    } else {
      this.setState({
        error: 1,
      });
    }
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
          <Announcement text={ann.text} date={ann.date} id={ann.id} hacker={ann.hacker} recruiter={ann.recruiter} delete={this.deleteAnnouncement} />
        </div>
      );
    });
    return renderList;
  }

  renderAnnouncementBar() {
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please select at least one group for the anonuncement.';
    }
    if (this.props.role === 'organizer') {
      return (
        <div className="col-md-10 col-md-offset-1 mainpage">
          <div className="compname">
            <b>Announcements</b>
          </div>
          <NewAnnouncement createAnnouncement={this.createAnnouncement} />
          <form action="">
            <input type="checkbox" id="hacker" defaultChecked="true"></input> Hacker &nbsp;
            <input type="checkbox" id="recruiter" defaultChecked="true"></input> Recruiter &nbsp; &nbsp;
            <b><font color="red">{errorText}</font></b>
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
