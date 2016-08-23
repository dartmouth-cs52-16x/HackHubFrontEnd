import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class User extends Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // calllback to app
  onDeleteClick(event) {
    this.props.delete(this.props.id);
  }

  renderDelete() {
    if (this.props.role !== 'organizer') {
      return null;
    }
    return (
      <p onClick={this.onDeleteClick}>x</p>
    );
  }

  // render announcement
  render() {
    return (
      <div className="col-md-10 col-md-offset-1 companysingle">
        <Link to={`users/${this.props.id}`} key={this.props.id}>
          <div className="companyname">{this.props.fullname}</div>
        </Link>
        {this.renderDelete()}
      </div>
    );
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.companies.all,
    user: state.auth.user,
    role: state.auth.role,
  }
);

export default connect(mapStateToProps, {})(User);
