import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import Announcement from './announcement';
import NewAnnouncement from './new_announcement';
import { createAnnouncement, deleteAnnouncement, fetchAnnouncements, fetchUsers } from '../actions/index';

// const client = require('twilio')('AC8c99b5a46595bddff7a994e986079da1', 'fdd9ceec592ea9aa42c35d79894f80bc');
// const testPhones = ['5083140743', '5083140743'];

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
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
  }

  // create a new note
  createAnnouncement(input) {
    const hackerBool = document.getElementById('hacker').checked;
    const recruitBool = document.getElementById('recruiter').checked;
    const currPhoneList = [];
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].phone !== undefined) {
        const thisRole = this.props.users[i].role;
        if ((thisRole === 'hacker' && hackerBool) || (thisRole === 'recruiter' && recruitBool)) {
          const currPhone = this.props.users[i].phone.toString();
          if (currPhone.match(/^\d{10}$/)) {
            currPhoneList.push(this.props.users[i].phone);
          }
        }
      }
    }
    console.log(currPhoneList);
    if (hackerBool || recruitBool) {
      const newAnn = { text: input, date: 'DATE', hacker: hackerBool, recruiter: recruitBool,
    phoneList: currPhoneList };
      this.props.createAnnouncement(newAnn);
      this.setState({
        error: 0,
      });
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
    users: state.users.all,
  }
);


export default connect(mapStateToProps, { createAnnouncement, deleteAnnouncement, fetchAnnouncements, fetchUsers })(Announcements);
