import React, { Component } from 'react';
import { Link } from 'react-router';

class User extends Component {

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
      <div className="col-md-10 col-md-offset-1 companysingle">
        <Link to={`users/${this.props.id}`} key={this.props.id}>
          <div className="companyname">{this.props.fullname}</div>
        </Link>
        <i className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={this.onDeleteClick}></i>
      </div>
    );
  }
}

export default User;
