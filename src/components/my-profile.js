import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../actions';

// example class based component (smart component)
class MyProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };

    this.addSkill = this.addSkill.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(localStorage.getItem('user'));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user.user);
    this.setState({
      user: nextProps.user.user,
    });
  }

  addSkill(e) {
    e.preventDefault();
    this.state.user.skills.push(document.getElementById('skill').value);
    console.log(this.state.user.skills);
  }

  updateUser(e) {
    e.preventDefault();
    const user = {
      id: this.state.user.id,
      skills: this.state.user.skills,
      image: document.getElementById('userlink').value,
      website: document.getElementById('usersite').value,
      facebook: document.getElementById('userfb').value,
      linkedin: document.getElementById('userli').value,
      phone: Number(document.getElementById('userphone').value),
      about: document.getElementById('userabout').value,
    };
    this.props.updateUser(user);
  }

  render() {
    if (this.state.user == null) {
      // if company not yet fetched
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="companyprofile" >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>{this.state.user.fullname}</b>
            </div>
            <div className="input-group col-md-10 col-md-offset-1 company-profile">
              <input type="text" className="form-control" id="userlink" placeholder="Image Link"></input>
              <input type="text" className="form-control" id="usersite" placeholder="www.yourwebsite.com"></input>
              <input type="text" className="form-control" id="userfb" placeholder="facebook profile"></input>
              <input type="text" className="form-control" id="userli" placeholder="Linkedin profile"></input>
              <input type="text" className="form-control" id="userphone" placeholder="Phone (##########)"></input>
              <input type="text" className="form-control" id="userabout" placeholder="About"></input>
            </div>
            <div className="input-group col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
              <b>Add a skill:</b>
              <div className="input-group">
                <input type="text" className="form-control" id="skill" placeholder="javascript"></input>
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="submit" onClick={this.addSkill} >New</button>
                </span>
              </div>
            </div>
            <button className="submitjob" onClick={this.updateUser}>Update</button>
          </div>
        </div>
      </div>
      );
  }
}

const mapStateToProps = (state) => (
  {
    user: state.users.user,
  }
);

export default connect(mapStateToProps, { fetchUser, updateUser })(MyProfile);
