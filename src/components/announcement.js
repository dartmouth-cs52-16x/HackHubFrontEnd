import React, { Component } from 'react';

class Announcement extends Component {

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
      <div className="col-md-10 col-md-offset-1 announcementsingle">
        <div>
          <div className="announcetext">{this.props.text}</div>
          <div className="announcedate">{this.props.date}</div>
        </div>
        <i className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={this.onDeleteClick}></i>
      </div>
    );
  }
}

Announcement.propTypes = {
  text: React.PropTypes.string,
  date: React.PropTypes.string,
  id: React.PropTypes.string,
};

export default Announcement;
