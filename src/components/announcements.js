import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import Announcement from './announcement';
import NewAnnouncement from './new_announcement';
<<<<<<< HEAD
import { createAnnouncement, fetchAnnouncements, deleteAnnouncement } from '../actions/index';
=======
import { createAnnouncement, deleteAnnouncement, fetchAnnouncements } from '../actions/index';
>>>>>>> 1f09277177559a9fe812fdaf2b932b72ca0cb799

class Announcements extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.createAnnouncement = this.createAnnouncement.bind(this);
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    this.renderAnnouncements = this.renderAnnouncements.bind(this);
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
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

  deleteAnnouncement(id) {
    this.props.deleteAnnouncement(id);
  }

  renderAnnouncements() {
    if (this.props.all == null) {
      return null;
    }
    const renderList = this.props.all.map((ann) => {
      return (
        <div key={ann.id} className="announcementsingle">
          <Announcement text={ann.text} date={ann.date} id={ann.id} delete={this.deleteAnnouncement} />
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


export default connect(mapStateToProps, { createAnnouncement, deleteAnnouncement, fetchAnnouncements })(Announcements);
