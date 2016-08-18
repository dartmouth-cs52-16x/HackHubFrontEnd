import React, { Component } from 'react';

class Job extends Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // calllback to app
  onDeleteClick(event) {
    this.props.delete(this.props.id);
  }

  // render announcement
  render() {
    return (
      <div className="col-md-10 col-md-offset-1 jobsingle">
        <div>
          <b>Job:</b> {this.props.name}
        </div>
        <div>
          <b>Description:</b> {this.props.desc}
        </div>
        <div>
          <b>Link:</b> {this.props.link}
        </div>
        <i className="fa fa-times" aria-hidden="true" onClick={this.onDeleteClick}></i>
      </div>
    );
  }
}

export default Job;
