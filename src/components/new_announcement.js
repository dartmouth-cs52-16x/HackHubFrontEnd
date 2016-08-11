// the entry bar to create a new note with a title...

import React, { Component } from 'react';

class NewAnnouncement extends Component {
  constructor(props) {
    super(props);
    this.state = { titleterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onInputChange(event) {
    this.setState({ titleterm: event.target.value });
  }
  onButtonClick(event) {
    this.props.createAnnouncement(this.state.titleterm);
  }
  render() {
    return (
      <div id="entry-bar" >
        <h1>Create a new announcement:</h1>
        <input id="create-field" onChange={this.onInputChange} value={this.state.titleterm} />
        <button id="create-button" onClick={this.onButtonClick}>Submit</button>
      </div>
    );
  }
}

export default NewAnnouncement;
