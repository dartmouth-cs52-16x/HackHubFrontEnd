import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

// example class based component (smart component)
class UserProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      user: null,
      // can add more later
    };
  }

  componentWillMount() {
    this.props.fetchUser(this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: this.nextProps.user,
    });
  }

  // render() {
  //   return (
  //     <div id="userProfile">
  //       <h1>this.props.fullname</h1>
  //       <img alt="profile" />
  //       <h3>this.props.email</h3>
  //       <h3>this.props.website</h3>
  //       <h3>this.props.linkedin</h3>
  //       <h4>this.props.about</h4>
  //       <h4>this.props.skills</h4>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div id="userProfile">
        {this.state.user._id}
      </div>
    );
  }
}

const mapDispatchToProps = (state) => (
  {
    user: state.user,
  }
);

export default connect(mapDispatchToProps, { fetchUser })(UserProfile);
