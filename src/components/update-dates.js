import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSchedule, updateSchedule } from '../actions/index';

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

    this.renderDayofWeek2 = this.renderDayofWeek2.bind(this);
    this.renderDay2 = this.renderDay2.bind(this);
    this.renderMonth2 = this.renderMonth2.bind(this);
    this.renderStart2 = this.renderStart2.bind(this);
    this.renderEnd2 = this.renderEnd2.bind(this);
  }

  componentWillMount() {
    this.props.fetchSchedule();
  }

  componentWillReceiveProps(nextProps) {
  }

  renderDayofWeek1() {
    if (this.props.day1.day_of_week) {
      return (<input type="text" className="form-control" id="day1dayofweek" defaultValue={this.props.day1.day_of_week}></input>);
    }
    return (<input type="text" className="form-control" id="day1dayofweek" placeholder="Day of Week"></input>);
  }

  renderDay1() {
    if (this.props.day1.day) {
      return (<input type="text" className="form-control" id="day1day" defaultValue={this.props.day1.day}></input>);
    }
    return (<input type="text" className="form-control" id="day1day" placeholder="Day"></input>);
  }

  renderMonth1() {
    if (this.props.day1.month) {
      return (<input type="text" className="form-control" id="day1month" defaultValue={this.props.day1.month}></input>);
    }
    return (<input type="text" className="form-control" id="day1month" placeholder="Month"></input>);
  }

  renderStart1() {
    if (this.props.day1.range.start) {
      return (<input type="text" className="form-control" id="day1start" defaultValue={this.props.day1.range.start}></input>);
    }
    return (<input type="text" className="form-control" id="day1start" placeholder="Start"></input>);
  }

  renderEnd1() {
    if (this.props.day1.range.start) {
      return (<input type="text" className="form-control" id="day1end" defaultValue={this.props.day1.range.end}></input>);
    }
    return (<input type="text" className="form-control" id="day1end" placeholder="End"></input>);
  }

  renderDayofWeek2() {
    if (this.props.day2.day_of_week) {
      return (<input type="text" className="form-control" id="day2dayofweek" defaultValue={this.props.day1.day_of_week}></input>);
    }
    return (<input type="text" className="form-control" id="day2dayofweek" placeholder="Day of Week"></input>);
  }

  renderDay2() {
    if (this.props.day1.day) {
      return (<input type="text" className="form-control" id="day2day" defaultValue={this.props.day2.day}></input>);
    }
    return (<input type="text" className="form-control" id="day2day" placeholder="Day"></input>);
  }

  renderMonth2() {
    if (this.props.day1.month) {
      return (<input type="text" className="form-control" id="day2month" defaultValue={this.props.day2.month}></input>);
    }
    return (<input type="text" className="form-control" id="day2month" placeholder="Month"></input>);
  }

  renderStart2() {
    if (this.props.day2.range.start) {
      return (<input type="text" className="form-control" id="day2start" defaultValue={this.props.day2.range.start}></input>);
    }
    return (<input type="text" className="form-control" id="day2start" placeholder="Start"></input>);
  }

  renderEnd2() {
    if (this.props.day1.range.start) {
      return (<input type="text" className="form-control" id="day2end" defaultValue={this.props.day2.range.end}></input>);
    }
    return (<input type="text" className="form-control" id="day2end" placeholder="End"></input>);
  }

  render() {
    return (
      <div className="" >
      </div>
      );
  }
}

const mapDispatchToProps = (state) => (
  {
    // day1: state.schedule.day1,
    // day2: state.schedule.day2,

  }
);

export default connect(mapDispatchToProps, { fetchSchedule, updateSchedule })(UpdateDates);
