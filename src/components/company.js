import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
    if (this.props.role === 'hacker') {
      return (
        <div className="col-md-10 col-md-offset-1 companysingle">
          <Link to={`companies/${this.props.id}`} key={this.props.id}>
            <div className="companyname">{this.props.name}</div>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="col-md-10 col-md-offset-1 companysingle">
          <Link to={`companies/${this.props.id}`} key={this.props.id}>
            <div className="companyname">{this.props.name}</div>
          </Link>
          <p onClick={this.onDeleteClick}>x</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.companies.all,
    user: state.auth.user,
    role: state.auth.role,
  }
);

// export default Company;
export default connect(mapStateToProps, {})(Company);
