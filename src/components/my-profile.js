// component for my profile editing page

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser, clearUser } from '../actions';
import Skill from './skill';

// example class based component (smart component)
class MyProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      refresh: 0,
      error: 0,
    };

    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.renderWebsite = this.renderWebsite.bind(this);
    this.renderFB = this.renderFB.bind(this);
    this.renderLI = this.renderLI.bind(this);
    this.renderPhone = this.renderPhone.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.userToFetch);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user.user,
    });
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  // add a skill to profile
  addSkill(e) {
    e.preventDefault();
    const currSkills = this.state.user.skills;
    let thisId = 1;
    if (currSkills.length > 0) {
      thisId = currSkills[currSkills.length - 1].id + 1;
    }
    const newSkill = { id: thisId,
      name: document.getElementById('skill').value,
    };
    currSkills.push(newSkill);
    this.setState({
      refresh: this.state.refresh + 1,
    });
  }

  // delete a skill
  deleteSkill(id) {
    const currSkills = this.state.user.skills;
    for (let i = 0; i < currSkills.length; i++) {
      if (currSkills[i].id === id) {
        currSkills.splice(i, 1);
      }
    }
    this.setState({
      refresh: this.state.refresh + 1,
    });
  }

  // submit input to update user
  updateUser(e) {
    const phoneinput = document.getElementById('userphone').value;
    if (phoneinput === '' || phoneinput.match(/^\d{10}$/)) {
      e.preventDefault();
      const user = {
        id: this.state.user.id,
        email: this.state.user.email,
        skills: this.state.user.skills,
        image: this.state.user.image,
        website: document.getElementById('usersite').value,
        facebook: document.getElementById('userfb').value,
        linkedin: document.getElementById('userli').value,
        phone: document.getElementById('userphone').value,
        about: document.getElementById('userabout').value,
      };
      this.props.updateUser(user);
    } else {
      this.setState({
        error: 1,
      });
    }
  }

  // render user image
  renderImage() {
    return (<img className="imgpreview" alt="" src={this.state.user.image} width="100%" />);
  }

  // render website
  renderWebsite() {
    if (this.state.user.website) {
      return (<input type="text" className="form-control" id="usersite" defaultValue={this.state.user.website}></input>);
    }
    return (<input type="text" className="form-control" id="usersite" placeholder="www.yourwebsite.com"></input>);
  }

  // render facebook
  renderFB() {
    if (this.state.user.facebook) {
      return (<input type="text" className="form-control" id="userfb" defaultValue={this.state.user.facebook}></input>);
    }
    return (<input type="text" className="form-control" id="userfb" placeholder="facebook profile"></input>);
  }

  // render linkedin
  renderLI() {
    if (this.state.user.linkedin) {
      return (<input type="text" className="form-control" id="userli" defaultValue={this.state.user.linkedin}></input>);
    }
    return (<input type="text" className="form-control" id="userli" placeholder="linkedin profile"></input>);
  }

  // render phone
  renderPhone() {
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please enter a valid phone number (##########)';
    }
    if (this.state.user.phone) {
      return (
        <div>
          <input type="text" className="form-control" id="userphone" defaultValue={this.state.user.phone}></input>
          <b><font color="red">{errorText}</font></b>
        </div>
      );
    }
    return (
      <div>
        <input type="text" className="form-control" id="userphone" placeholder="Phone (##########)"></input>
        <b><font color="red">{errorText}</font></b>
      </div>
    );
  }

  // render about
  renderAbout() {
    if (this.state.user.about) {
      return (<input type="text" className="form-control" id="userabout" defaultValue={this.state.user.about}></input>);
    }
    return (<input type="text" className="form-control" id="userabout" placeholder="About"></input>);
  }

  // render list of skills
  renderSkills() {
    if (this.state.user.skills == null) {
      return null;
    }
    const renderList = this.state.user.skills.map((skill) => {
      return (
        <Skill key={skill.id} id={skill.id} name={skill.name} delete={this.deleteSkill} />
      );
    });
    return renderList;
  }

  // render all
  render() {
    if (this.state.user == null) {
      // if company not yet fetched
      return (
        <div></div>
      );
    }
    return (
      <div className="companyprofile" >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>{this.state.user.fullname}</b>
            </div>
            <div className="input-group col-md-10 company-profile">
              {this.renderImage()}
              {this.renderWebsite()}
              {this.renderFB()}
              {this.renderLI()}
              {this.renderPhone()}
              {this.renderAbout()}
            </div>
            <div className="input-group">
              <b>Add a skill:</b>
              <div className="input-group">
                <input type="text" className="form-control" id="skill" placeholder="javascript"></input>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit" onClick={this.addSkill} >New</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skilllist">
          {this.renderSkills()}
        </div>
        <div>
          <button className="submitjob" onClick={this.updateUser}>Update</button>
        </div>
      </div>
      );
  }
}

const mapDispatchToProps = (state) => (
  {
    userToFetch: state.auth.id,
    user: state.users.user,
  }
);

export default connect(mapDispatchToProps, { fetchUser, updateUser, clearUser })(MyProfile);
