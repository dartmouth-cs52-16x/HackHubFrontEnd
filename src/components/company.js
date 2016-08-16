import React, { Component } from 'react';

class Company extends Component {

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
      <div className="companiesingle">
        <div className="companyname">{this.props.text}</div>
        <i className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={this.onDeleteClick}></i>
      </div>
    );
  }
}

Company.propTypes = {
  text: React.PropTypes.string,
  id: React.PropTypes.string,
};

export default Company;
