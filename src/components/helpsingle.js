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
          <div className="announcetext">{this.props.message}</div>
          <div className="announcedate">{this.props.category}</div>
          <div className="useremail">Email: {this.props.email}</div>
          <div className="userid">User ID: {this.props.id}</div>
        </div>
      </div>
    );
  }
}

HelpSingle.propTypes = {
  message: React.PropTypes.string,
  category: React.PropTypes.string,
  email: React.PropTypes.string,
  id: React.PropTypes.string,
};

export default HelpSingle;
