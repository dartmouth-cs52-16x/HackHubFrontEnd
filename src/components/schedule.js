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
        events: [
          {
            time_range: '10-11am',
            name: 'Sample Event 1',
            location: 'A Place',
            color: '#8BB9B6',
            start: 10.0,
            end: 11.0,
          },
          {
            time_range: '1pm-3pm',
            name: 'Sample Event 2',
            location: 'Another Place',
            color: '#E0CC5C',
            start: 13.0,
            end: 15.0,
          },
          {
            time_range: '7pm-8pm',
            name: 'Sample Event 2',
            location: 'Another Place',
            color: '#8BB9B6',
            start: 19.0,
            end: 20.0,
          },
        ],
      },
      day2: {
        day_of_week: 'Day of Week',
        month: 'Month',
        day: 'Day',
        range: {
          start: 10,
          end: 20,
        },
        events: [
          {
            time_range: '9-10am',
            name: 'Sample Event 1',
            location: 'A Place',
            color: '#8BB9B6',
            start: 9.0,
            end: 10.0,
          },
          {
            time_range: '3pm-5pm',
            name: 'Sample Event 2',
            location: 'Another Place',
            color: '#E0CC5C',
            start: 15.0,
            end: 17.0,
          },
          {
            time_range: '11pm-11:30pm',
            name: 'Sample Event 2',
            location: 'Another Place',
            color: '#8BB9B6',
            start: 23.0,
            end: 23.5,
          },
        ],
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
            <button onClick={this.createSchedule} className="btn btn-default">New Schedule</button>
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
