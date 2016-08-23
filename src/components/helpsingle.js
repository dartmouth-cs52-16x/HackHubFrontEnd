import React, { Component } from 'react';

class HelpSingle extends Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
  }

  // render announcement
  render() {
    return (
      <div className="col-md-10 col-md-offset-1 announcementsingle">
        <div>
          <div className="announcetext">Message: {this.props.message}</div>
          <div className="category">Category: {this.props.category}</div>
          <div className="userid">User ID: {this.props.id}</div>
        </div>
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
