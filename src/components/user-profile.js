import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser, clearUser } from '../actions';
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
    this.renderSite = this.renderSite.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
    this.renderCompany = this.renderCompany.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  /* componentWillReceiveProps(nextProps) {
    console.log(nextProps.user.user);
    this.setState({
      user: nextProps.user.user,
    });
  } */

  renderSkills() {
    if (this.props.user.user.skills.length === 0) {
      return (
        <div>
          No skills!
        </div>
      );
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

  renderSite() {
    if (this.props.user.user.website != null && this.props.user.user.website !== '') {
      return (
        <div className="usersite">
          <b>Website:</b> {this.props.user.user.website}
        </div>
      );
    } else {
      return null;
    }
  }

  renderAbout() {
    if (this.props.user.user.about != null && this.props.user.user.about !== '') {
      return (
        <div className="useraboutbox">
          <div className="userabout">
            <b>About:</b> {this.props.user.user.about}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  renderCompany() {
    if (this.props.user.user.company !== null && this.props.user.user.company !== '') {
      return (
        <div className="usercompany">
          <b>Company:</b> {this.props.user.user.company}
        </div>
      );
    }
    return null;
  }

  render() {
    if (this.props.user == null) {
      // if user not yet fetched
      return (
        <div></div>
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
            {this.renderCompany()}
            {this.renderSite()}
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
        {this.renderAbout()}
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

export default connect(mapDispatchToProps, { fetchUser, updateUser, clearUser })(UserProfile);
