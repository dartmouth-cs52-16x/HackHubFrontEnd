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


    this.createEvent = this.createEvent.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
  }

  createEvent() {
    browserHistory.push('/new_event');
  }

  updateSchedule() {
    browserHistory.push('/update_schedule');
  }


  render() {
    return (
      <div>
        <div id="schedbtn" className="">
        <div>
          <button onClick={this.createEvent} className="btn btn-default">New Event</button>
        </div>
          <div>
            <button onClick={this.updateSchedule} className="btn btn-default">Update Schedule</button>
          </div>
        </div>
        <div id="schedule">
          <ScheduleDisplay />
        </div>
      </div>
    );
  }
}
export default connect(null, { fetchSchedule, updateSchedule, createSchedule })(Schedule);
