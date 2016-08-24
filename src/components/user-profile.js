import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../actions';
// import Skill from './skill';

// example class based component (smart component)
class UserProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    /* this.state = {
      user: '',
    }; */

    this.renderSkills = this.renderSkills.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
  }

  /* componentWillReceiveProps(nextProps) {
    console.log(nextProps.user.user);
    this.setState({
      user: nextProps.user.user,
    });
  } */

  renderSkills() {
    if (this.props.user.user.skills == null) {
      return null;
    }
    const renderList = this.props.user.user.skills.map((skill) => {
      return (
        <div key={skill.id} className="skillsingle">
          {skill.name}
        </div>
      );
    });
    return renderList;
  }

  render() {
    if (this.props.user == null) {
      // if company not yet fetched
      return (
        <div>Loading...</div>
      );
    }
    console.log(this.props);
    return (
      <div className="userprofile" >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="userfullname">
              <b>{this.props.user.user.fullname}</b>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 thumb">
              <div className="imagerow">
                <img className="profimg" src={this.props.user.user.image} alt="?" />
              </div>
            </div>
            <div className="useremail">
              <b>Email:</b> {this.props.user.user.email}
            </div>
            <div className="usersite">
              <b>Website:</b> {this.props.user.user.website}
            </div>
            <div className="userlinks">
              <a href={this.props.user.user.linkedin}>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              &nbsp;
              <a href={this.props.user.user.facebook}>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="userabout">
          <b>About:</b> {this.props.user.user.about}
        </div>
        <div className="userskills">
          <b>Skills:</b> {this.renderSkills()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
    user: state.users.user,
  }
);

export default connect(mapDispatchToProps, { fetchUser, updateUser })(UserProfile);
