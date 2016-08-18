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

  renderUsers() {
    if (this.props.all == null) {
      return null;
    }
    const renderList = this.props.all.map((user) => {
      console.log(user);
      return (
        <div key={user.id} className="">
          <User name={user.name} id={user.id} delete={this.deleteUser} />
        </div>
      );
    });
    return renderList;
  }


  render() {
    return (
      <div>
        <div className="col-md-2 col-md-offset-9 mainpage">
        </div>
        <div>
          {this.renderUsers()}
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
