// the entry bar to create a new note with a title
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCompany } from '../actions/index';
import DropZone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'iqn44tug';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dyvb3lskk/image/upload';

class NewCompanyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      uploadedFileCloudinaryUrl: '',
    };
    this.onButtonClick = this.onButtonClick.bind(this);
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

  onButtonClick(event) {
    const fields = { name: document.getElementById('compname').value,
      image: this.state.uploadedFileCloudinaryUrl,
      website: document.getElementById('compsite').value,
      recruiter: document.getElementById('comprecruiter').value,
    };
    if ((fields.name === '') || (fields.image === '') ||
    (fields.website === '') || (fields.recruiter === '')) {
      this.setState({ error: 1 });
    } else {
      this.props.createCompany(fields);
    }
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
  render() {
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please enter all fields for the company.';
    }
    return (
      <div className="companyprofile">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>New Company Profile</b>
            </div>
          </div>
          <div className="input-group col-md-10 col-md-offset-1 company-profile">
            <div className="new-company">
              <DropZone accept="image/*" multiple={false} ref="dropzone" id="dropzone" onDrop={this.onDrop}>
                <div>Click here to upload your profile image, or simply drag a file into this box.</div>
              </DropZone>
              {this.state.files.length > 0 ? <div className="imgpreview">
                <h2>Uploading {this.state.files.length} files...</h2>
                <div>Preview: {this.state.files.map((file) => <img alt="" src={file.preview} width="100%" />)}</div>
              </div> : null}
            </div>
            <input type="text" className="form-control" id="compname" placeholder="Company Name"></input>
            <input type="text" className="form-control" id="compsite" placeholder="www.companywebsite.com"></input>
            <input type="text" className="form-control" id="comprecruiter" placeholder="recruiter@company.com"></input>
          </div>
          <button className="submitjob" onClick={this.onButtonClick}>Create Profile</button>
        </div>
        <b><font color="red">{errorText}</font></b>
      </div>
    );
  }
}

export default connect(null, { createCompany })(NewCompanyProfile);
