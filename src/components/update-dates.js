import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSchedule, updateSchedule, createSchedule } from '../actions/index';

// example class based component (smart component)
class UpdateDates extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };

    this.renderDayofWeek1 = this.renderDayofWeek1.bind(this);
    this.renderDay1 = this.renderDay1.bind(this);
    this.renderMonth1 = this.renderMonth1.bind(this);
    this.renderStart1 = this.renderStart1.bind(this);
    this.renderEnd1 = this.renderEnd1.bind(this);

    this.changeDayofWeek1 = this.changeDayofWeek1.bind(this);
    this.changeDay1 = this.changeDay1.bind(this);
    this.changeMonth1 = this.changeMonth1.bind(this);
    this.changeStart1 = this.changeStart1.bind(this);
    this.changeEnd1 = this.changeEnd1.bind(this);
    this.renderDayofWeek2 = this.renderDayofWeek2.bind(this);
    this.renderDay2 = this.renderDay2.bind(this);
    this.renderMonth2 = this.renderMonth2.bind(this);
    this.renderStart2 = this.renderStart2.bind(this);
    this.renderEnd2 = this.renderEnd2.bind(this);

    this.changeDayofWeek2 = this.changeDayofWeek2.bind(this);
    this.changeDay2 = this.changeDay2.bind(this);
    this.changeMonth2 = this.changeMonth2.bind(this);
    this.changeStart2 = this.changeStart2.bind(this);
    this.changeEnd2 = this.changeEnd2.bind(this);

    this.updateSchedule = this.updateSchedule.bind(this);
  }

  componentWillMount() {
    this.props.fetchSchedule();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.schedule) {
      this.setState({
        id: nextProps.schedule.id,
        day1: nextProps.schedule.day1,
        day2: nextProps.schedule.day2,
      });
    }
  }

  changeDayofWeek1(event) {
    this.setState({
      day1: { ...this.state.day1, day_of_week: event.target.value },
    });
  }

  changeMonth1(event) {
    this.setState({
      day1: { ...this.state.day1, month: event.target.value },
    });
  }

  changeStart1(event) {
    this.setState({
      day1: { ...this.state.day1, range: { ...this.state.day1.range, start: event.target.value } },
    });
  }

  changeEnd1(event) {
    this.setState({
      day1: { ...this.state.day1, range: { ...this.state.day1.range, end: event.target.value } },
    });
  }

  changeDay1(event) {
    this.setState({
      day1: { ...this.state.day1, day: event.target.value },
    });
  }

  changeDayofWeek2(event) {
    this.setState({
      day2: { ...this.state.day2, day_of_week: event.target.value },
    });
  }

  changeMonth2(event) {
    this.setState({
      day2: { ...this.state.day2, month: event.target.value },
    });
  }

  changeStart2(event) {
    this.setState({
      day2: { ...this.state.day2, range: { ...this.state.day2.range, start: event.target.value } },
    });
  }

  changeEnd2(event) {
    this.setState({
      day2: { ...this.state.day2, range: { ...this.state.day2.range, end: event.target.value } },
    });
  }

  changeDay2(event) {
    this.setState({
      day2: { ...this.state.day2, day: event.target.value },
    });
  }

  updateSchedule(e) {
    e.preventDefault();
    this.props.updateSchedule(this.state);
  }

  renderDayofWeek1() {
    if (this.state.day1) {
      return (<input type="text" className="form-control" id="day1dayofweek" value={this.state.day1.day_of_week} onChange={this.changeDayofWeek1}></input>);
    }
    return (<input type="text" className="form-control" id="day1dayofweek" placeholder="Day of Week"></input>);
  }

  renderDay1() {
    if (this.state.day1 && this.state.day1.day) {
      return (<input type="text" className="form-control" id="day1day" value={this.state.day1.day} onChange={this.changeDay1}></input>);
    }
    return (<input type="text" className="form-control" id="day1day" placeholder="Day"></input>);
  }

  renderMonth1() {
    if (this.state.day1 && this.state.day1.month) {
      return (<input type="text" className="form-control" id="day1month" value={this.state.day1.month} onChange={this.changeMonth1}></input>);
    }
    return (<input type="text" className="form-control" id="day1month" placeholder="Month"></input>);
  }

  renderStart1() {
    if (this.state.day1 && this.state.day1.range.start) {
      return (<input type="text" className="form-control" id="day1start" value={this.state.day1.range.start} onChange={this.changeStart1}></input>);
    }
    return (<input type="text" className="form-control" id="day1start" placeholder="Start"></input>);
  }

  renderEnd1() {
    if (this.state.day1 && this.state.day1.range.start) {
      return (<input type="text" className="form-control" id="day1end" value={this.state.day1.range.end} onChange={this.changeEnd1}></input>);
    }
    return (<input type="text" className="form-control" id="day1end" placeholder="End"></input>);
  }

  renderDayofWeek2() {
    if (this.state.day2 && this.state.day2.day_of_week) {
      return (<input type="text" className="form-control" id="day2dayofweek" value={this.state.day2.day_of_week} onChange={this.changeDayofWeek2}></input>);
    }
    return (<input type="text" className="form-control" id="day2dayofweek" placeholder="Day of Week"></input>);
  }

  renderDay2() {
    if (this.state.day2 && this.state.day2.day) {
      return (<input type="text" className="form-control" id="day2day" value={this.state.day2.day} onChange={this.changeDay2}></input>);
    }
    return (<input type="text" className="form-control" id="day2day" placeholder="Day"></input>);
  }

  renderMonth2() {
    if (this.state.day2 && this.state.day2.month) {
      return (<input type="text" className="form-control" id="day2month" value={this.state.day2.month} onChange={this.changeMonth2}></input>);
    }
    return (<input type="text" className="form-control" id="day2month" placeholder="Month"></input>);
  }

  renderStart2() {
    if (this.state.day2 && this.state.day2.range.start) {
      return (<input type="text" className="form-control" id="day2start" value={this.state.day2.range.start} onChange={this.changeStart2}></input>);
    }
    return (<input type="text" className="form-control" id="day2start" placeholder="Start"></input>);
  }

  renderEnd2() {
    if (this.state.day2 && this.state.day2.range.start) {
      return (<input type="text" className="form-control" id="day2end" value={this.state.day2.range.end} onChange={this.changeEnd2}></input>);
    }
    return (<input type="text" className="form-control" id="day2end" placeholder="End"></input>);
  }

  render() {
    return (
      <div>
        <div className="" >
          <h1>Day 1</h1>
            {this.renderDayofWeek1()}
            {this.renderDay1()}
            {this.renderMonth1()}
            {this.renderStart1()}
            {this.renderEnd1()}
          <h1>Day 2</h1>
            {this.renderDayofWeek2()}
            {this.renderDay2()}
            {this.renderMonth2()}
            {this.renderStart2()}
            {this.renderEnd2()}
        </div>
        <div>
          <button className="submitjob" onClick={this.updateSchedule}>Update</button>
        </div>
      </div>
      );
  }
}

const mapDispatchToProps = (state) => (
  {
    schedule: state.schedule.all[0],

  }
);

export default connect(mapDispatchToProps, { fetchSchedule, updateSchedule, createSchedule })(UpdateDates);
