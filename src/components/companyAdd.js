// the entry bar to create a new note with a title

import React, { Component } from 'react';

class NewCompany extends Component {
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
    this.props.createCompany(this.state.titleterm);
  }
  render() {
    return (
      <div className="input-group">
          <input type="text" className="form-control" id="submit-bar" placeholder="Company Name"
            onChange={this.onInputChange} value={this.state.titleterm}
          ></input>
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit" onClick={this.onButtonClick} >New</button>
          </span>
        </div>
    );
  }
}

export default NewCompany;
