import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../actions';
import Skill from './skill';
import DropZone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'iqn44tug';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dyvb3lskk/image/upload';

// example class based component (smart component)
class MyProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      refresh: 0,
      error: 0,
      files: [],
      uploadedFileCloudinaryUrl: '',
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
    this.onDrop = this.onDrop.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentWillMount() {
    console.log(this.props.userToFetch);
    this.props.fetchUser(this.props.userToFetch);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      user: nextProps.user.user,
    });
  }

  onDrop(files) {
    if (files.length <= 0) {
      this.setState({
        files,
      });
    } else {
      this.setState({
        files,
        uploadedFile: files[0],
      });
      this.handleImageUpload(files[0]);
    }
  }

  onOpenClick() {
    this.refs.dropzone.open();
  }

  handleImageUpload(file) {
    const upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
        });
      }
    });
  }

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
    console.log(this.state.user.skills);
  }

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

  updateUser(e) {
    const phoneinput = document.getElementById('userphone').value;
    if (phoneinput.match(/^\d{10}$/)) {
      e.preventDefault();
      const user = {
        id: this.state.user.id,
        email: this.state.user.email,
        skills: this.state.user.skills,
        image: document.getElementById('userlink').value,
        // image: this.state.uploadedFileCloudinaryUrl,
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

  renderImage() {
    if (this.props.user.user.image.length > 0) {
      return (<input type="text" className="form-control" id="userlink" defaultValue={this.props.user.user.image}></input>);
    } else {
      return (<input type="text" className="form-control" id="userlink" placeholder="Please choose a photo" defaultValue={this.state.uploadedFileCloudinaryUrl}></input>);
    }
  }

  renderWebsite() {
    if (this.state.user.website) {
      return (<input type="text" className="form-control" id="usersite" defaultValue={this.state.user.website}></input>);
    }
    return (<input type="text" className="form-control" id="usersite" placeholder="www.yourwebsite.com"></input>);
  }

  renderFB() {
    if (this.state.user.facebook) {
      return (<input type="text" className="form-control" id="userfb" defaultValue={this.state.user.facebook}></input>);
    }
    return (<input type="text" className="form-control" id="userfb" placeholder="facebook profile"></input>);
  }

  renderLI() {
    if (this.state.user.linkedin) {
      return (<input type="text" className="form-control" id="userli" defaultValue={this.state.user.linkedin}></input>);
    }
    return (<input type="text" className="form-control" id="userli" placeholder="linkedin profile"></input>);
  }

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

  renderAbout() {
    if (this.state.user.about) {
      return (<input type="text" className="form-control" id="userabout" defaultValue={this.state.user.about}></input>);
    }
    return (<input type="text" className="form-control" id="userabout" placeholder="About"></input>);
  }

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
            <DropZone accept="image/*" multiple={false} ref="dropzone" id="dropzone" onDrop={this.onDrop}>
              <div>Click here to upload your profile image, or simply drag a file into this box.</div>
            </DropZone>
            {this.state.files.length > 0 ? <div className="imgpreview">
              <h2>Uploading {this.state.files.length} files...</h2>
              <div>Preview: {this.state.files.map((file) => <img alt="" src={file.preview} width="100%" />)}</div>
            </div> : null}
            <div className="input-group col-md-10 col-md-offset-1 company-profile">
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

export default connect(mapDispatchToProps, { fetchUser, updateUser })(MyProfile);
