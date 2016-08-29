import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { signupUser } from '../actions/index';
import DropZone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'iqn44tug';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dyvb3lskk/image/upload';

// example class based component (smart component)
class Signup extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      fullname: '',
      email: '',
      password: '',
      role: '',
      company: '',
      error: 0,
      files: [],
      uploadedFileCloudinaryUrl: '',
    };

    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeRole = this.changeRole.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
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

  changeFullName(event) {
    this.setState({
      fullname: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changeRole(event) {
    this.setState({
      role: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  changeCompany(event) {
    this.setState({
      company: event.target.value,
    });
  }

  submitForm() {
    if (this.state.fullname.trim().length > 0 && this.state.email.trim().length > 0 &&
    this.state.password.trim().length > 0 && this.state.role.trim().length > 0 &&
    (!(this.state.role === 'recruiter') || this.state.company.trim().length > 0)) {
      let companyText = '';
      if (this.state.role === 'recruiter') {
        companyText = this.state.company;
      }
      let url = '';
      if (this.state.uploadedFileCloudinaryUrl === '') {
        url = 'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg';
      } else {
        url = this.state.uploadedFileCloudinaryUrl;
      }
      const user = {
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
        company: companyText,
        image: url,
      };
      this.props.signupUser(user);
    } else {
      this.setState({
        error: 1,
      });
    }
  }

  renderCompany() {
    if (this.state.role !== 'recruiter') {
      return null;
    }
    return (
      <div className="companyrow">
        <div>Company</div>
        <input value={this.state.company} onChange={this.changeCompany} />
      </div>
    );
  }

  render() {
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please fill out all fields';
    }
    return (
      <div className="signupbox col-md-6 col-md-offset-3">
        <div className="compname">
          <b>Sign Up</b>
        </div>
        <div className="fullnamerow">
          <div>Full Name</div>
          <input value={this.state.fullname} onChange={this.changeFullName} />
        </div>
        <div className="emailrow">
          <div>Email</div>
          <input value={this.state.email} onChange={this.changeEmail} />
        </div>
        <div className="passwordrow">
          <div>Password</div>
          <input value={this.state.password} onChange={this.changePassword} />
        </div>
        {this.renderCompany()}
        <div className="organizerrow">
          <input type="radio" name="organizer" value="organizer" onChange={this.changeRole} /> Organizer <br />
          <input type="radio" name="organizer" value="hacker" onChange={this.changeRole} /> Hacker <br />
          <input type="radio" name="organizer" value="recruiter" onChange={this.changeRole} /> Recruiter
          <br />
        </div>
        <br />
        <div className="organizerrow">
          <DropZone accept="image/*" multiple={false} ref="dropzone" id="dropzone" onDrop={this.onDrop}>
            <div>Click here to upload your profile image, or simply drag a file into this box.</div>
          </DropZone>
          {this.state.files.length > 0 ? <div className="imgpreview">
            <h2>Uploading {this.state.files.length} files...</h2>
            <div>Preview: {this.state.files.map((file) => <img alt="" src={file.preview} width="100%" />)}</div>
          </div> : null}
        </div>
        <div className="loginbutton">
          <button className="submitjob" onClick={this.submitForm}>Submit</button>
        </div>
        <div>
          <Link id="link" to="/signin">Sign In</Link>
        </div>
        <div>
          <b><font color="red">{errorText}</font></b>
        </div>
      </div>
    );
  }
}

export default connect(null, { signupUser })(Signup);
