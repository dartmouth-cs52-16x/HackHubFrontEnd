// component for the new announcement creation bar

import React, { Component } from 'react';

class NewAnnouncement extends Component {
  constructor(props) {
    super(props);
    this.state = { titleterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  // change text input
  onInputChange(event) {
    this.setState({ titleterm: event.target.value });
  }

  // submit announcement on click
  onButtonClick(event) {
    this.props.createAnnouncement(this.state.titleterm);
  }

  // render all
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" id="submit-bar" placeholder="Announcement"
          onChange={this.onInputChange} value={this.state.titleterm} maxLength="160"
        ></input>
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit" onClick={this.onButtonClick} >New</button>
        </span>
      </div>
    );
  }
}

export default NewAnnouncement;
