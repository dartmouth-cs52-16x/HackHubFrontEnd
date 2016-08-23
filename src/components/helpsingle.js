import React, { Component } from 'react';
import { Link } from 'react-router';

class HelpSingle extends Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // calllback to app
  // helpid is the actual id of the help message
  onDeleteClick(event) {
    this.props.delete(this.props.helpid);
  }

  // render announcement
  render() {
    const link = `/users/${this.props.id}`;
    return (
      <div className="col-md-10 col-md-offset-1 announcementsingle">
        <div>
          <div className="announcetext">Message: {this.props.message}</div>
          <div className="category">Category: {this.props.category}</div>
          <Link to={link} className="userid">Go to user profile to address this message.</Link>
        </div>
        <p onClick={this.onDeleteClick}>x</p>
      </div>
    );
  }
}

HelpSingle.propTypes = {
  message: React.PropTypes.string,
  category: React.PropTypes.string,
  id: React.PropTypes.string,
};

export default HelpSingle;
