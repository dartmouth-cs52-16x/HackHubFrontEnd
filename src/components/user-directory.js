import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './user';
import { fetchUsers, deleteUser } from '../actions/index';

class UserDirectory extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
    };

    this.deleteUser = this.deleteUser.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
  }

  deleteUser(id) {
    this.props.deleteUser(id);
  }

  renderUsers(role) {
    if (this.props.all == null) {
      return null;
    }
    let roleText = '';
    if (role === 'organizer') {
      roleText = 'ORGANIZER';
    } else if (role === 'recruiter') {
      roleText = 'RECRUITER';
    } else {
      roleText = 'HACKER';
    }
    const renderList = this.props.all.map((user) => {
      if (user.role === role) {
        return (
          <div key={user.id} className="">
            <User name={user.name} id={user.id} fullname={user.fullname} delete={this.deleteUser} />
          </div>
        );
      }
      return null;
    });
    return (
      <div className="directorysection">
        <div>
          <b>{roleText}</b>
        </div>
        <div>
          {renderList}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="companies">
        <div className="compname">
          <b>Directory</b>
        </div>
        <div id="users">
          {this.renderUsers('hacker')}
          {this.renderUsers('recruiter')}
          {this.renderUsers('organizer')}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    all: state.users.all,
  }
);

export default connect(mapStateToProps, { fetchUsers, deleteUser })(UserDirectory);
