import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSchedule, updateSchedule, createSchedule } from '../actions/index';

// example class based component (smart component)
class NewEvent extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };

    this.createEvent = this.createEvent.bind(this);
  }

  componentWillMount() {
    this.props.fetchSchedule();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.schedule.id,
      day1: nextProps.schedule.day1,
      day2: nextProps.schedule.day2,
    });
  }

  createEvent(e) {
    e.preventDefault();
    const event = {
      time_range: document.getElementById('eventdisplaytime').value,
      name: document.getElementById('eventname').value,
      location: document.getElementById('eventlocation').value,
      color: document.getElementById('eventcolor').value,
      start: document.getElementById('eventstart').value,
      end: document.getElementById('eventend').value,
    };

    if ((event.time_range === '') || (event.name === '') ||
      (event.location === '') || (event.color === '') || (event.start === '')
      || (event.end === '')) {
      this.setState({ error: 1 });
    } else {
      const newSched = this.state;
      if (document.getElementById('day2').checked) {
        newSched.day2.events.push(event);
      } else {
        newSched.day1.events.push(event);
      }

      console.log(newSched);
      this.props.updateSchedule(newSched);
    }
  }

  render() {
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please enter all fields for the event.';
    }
    return (
      <div className="new_event">
        <form action="">
          <input type="radio" name="gender" value="day1" id="day1" defaultChecked></input> Day 1<br />
          <input type="radio" name="gender" value="day2" id="day2"></input> Day 2<br />
        </form>
        <div className="" >
          <input type="text" className="form-control" id="eventname" placeholder="Name"></input>
          <input type="text" className="form-control" id="eventlocation" placeholder="Location"></input>
          <input type="text" className="form-control" id="eventdisplaytime" placeholder="Display Time"></input>
          <input type="text" className="form-control" id="eventstart" placeholder="Start"></input>
          <input type="text" className="form-control" id="eventend" placeholder="End"></input>
          <input type="text" className="form-control" id="eventcolor" placeholder="Display Color"></input>
        </div>
        <div>
          <button className="submitjob" onClick={this.createEvent}>Create</button>
        </div>
        <b><font color="red">{errorText}</font></b>
      </div>
      );
  }
}

const mapDispatchToProps = (state) => (
  {
    schedule: state.schedule.all[0],

  }
);

export default connect(mapDispatchToProps, { fetchSchedule, updateSchedule, createSchedule })(NewEvent);
