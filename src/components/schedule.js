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
    this.createSchedule = this.createSchedule.bind(this);
  }

  createEvent() {
    browserHistory.push('/new_event');
  }

  updateSchedule() {
    browserHistory.push('/update_schedule');
  }

  createSchedule() {
    this.props.createSchedule({
      day1: {
        day_of_week: 'Day of Week',
        month: 'Month',
        day: 'Day',
        range: {
          start: 10,
          end: 20,
        },
        events: [],
      },
      day2: {
        day_of_week: 'Day of Week',
        month: 'Month',
        day: 'Day',
        range: {
          start: 10,
          end: 20,
        },
        events: [],
      },
    });
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
          <div>
            <button onClick={this.createSchedule} className="btn btn-default">Reset Schedule</button>
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
