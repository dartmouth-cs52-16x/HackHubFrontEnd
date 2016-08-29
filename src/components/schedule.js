import ScheduleDisplay from './scheduleDisplay';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchSchedule, updateSchedule, createSchedule } from '../actions/index';

class Schedule extends Component {


  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };

    this.renderButtons = this.renderButtons.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
  }

  createEvent() {
    browserHistory.push('/new_event');
  }

  updateSchedule() {
    browserHistory.push('/update_schedule');
  }

  renderButtons() {
    if (this.props.role === 'organizer') {
      return (
        <div id="schedbtn" className="">
          <div>
            <button onClick={this.createEvent} className="btn btn-default">New Event</button>
          </div>
          <div>
            <button onClick={this.updateSchedule} className="btn btn-default">Update Schedule</button>
          </div>
        </div>
      );
    }
    return (<div></div>);
  }


  render() {
    return (
      <div>
        {this.renderButtons()}
        <div id="schedule">
          <ScheduleDisplay />
        </div>
        <div className="schedule_footer">
          <p>*If you have any question, please contact organizer.</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, action) => (
  {
    role: state.auth.role,
  }
);

export default connect(mapStateToProps, { fetchSchedule, updateSchedule, createSchedule })(Schedule);
