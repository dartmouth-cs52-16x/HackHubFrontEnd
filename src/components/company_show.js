// the component for showing the profile of a company

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompany, updateCompany, clearCompany, fetchUsers } from '../actions/index';
import Job from './job';
import { Link } from 'react-router';

class CompanyShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
      website: '',
      recruiter: '',
      jobs: [],
      about: '',
      editing: false,
      error: 0,
    };
    this.first = true;

    this.onWebsiteChange = this.onWebsiteChange.bind(this);
    this.onRecruiterChange = this.onRecruiterChange.bind(this);
    this.onAboutChange = this.onAboutChange.bind(this);
    this.editInfo = this.editInfo.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.submitJob = this.submitJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.renderJobs = this.renderJobs.bind(this);
    this.renderRecruiter = this.renderRecruiter.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
    this.renderSite = this.renderSite.bind(this);
  }

  componentWillMount() {
    this.props.fetchCompany(this.props.params.id);
    this.props.fetchUsers();
    this.first = false;
  }

  componentWillUnmount() {
    this.props.clearCompany();
  }

  // update website input
  onWebsiteChange(event) {
    this.setState({ website: event.target.value });
  }

  // update recruiter input
  onRecruiterChange(event) {
    this.setState({ recruiter: event.target.value });
  }

  // update about input
  onAboutChange(event) {
    this.setState({ about: event.target.value });
  }

  // create a new job
  submitJob() {
    const currJobs = this.props.thisCompany.jobs;
    let thisId = 1;
    if (currJobs.length > 0) {
      thisId = currJobs[currJobs.length - 1].id + 1;
    }
    const newJob = { id: thisId,
      name: document.getElementById('jobname').value,
      desc: document.getElementById('jobdesc').value,
      link: document.getElementById('joblink').value,
    };
    currJobs.push(newJob);
    const fields = { id: this.props.thisCompany.id,
      name: this.props.thisCompany.name,
      image: this.props.thisCompany.image,
      website: this.props.thisCompany.website,
      recruiter: this.props.thisCompany.recruiter,
      jobs: currJobs,
      about: this.props.thisCompany.about,
    };
    this.props.updateCompany(fields);
  }

  // delete a job
  deleteJob(id) {
    const currJobs = this.props.thisCompany.jobs;
    for (let i = 0; i < currJobs.length; i++) {
      if (currJobs[i].id === id) {
        currJobs.splice(i, 1);
      }
    }
    const fields = { id: this.props.thisCompany.id,
      name: this.props.thisCompany.name,
      image: this.props.thisCompany.image,
      website: this.props.thisCompany.website,
      recruiter: this.props.thisCompany.recruiter,
      jobs: currJobs,
      about: this.props.thisCompany.about,
    };
    this.props.updateCompany(fields);
  }

  // edit company info, set state to props for input change
  editInfo() {
    this.setState({
      name: this.props.thisCompany.name,
      image: this.props.thisCompany.image,
      website: this.props.thisCompany.website,
      recruiter: this.props.thisCompany.recruiter,
      jobs: this.props.thisCompany.jobs,
      about: this.props.thisCompany.about,
      editing: true,
      initialize: true,
    });
  }

  // submit new company info
  submitInfo() {
    // submit only if no field is empty (or just spaces)
    if (this.state.website.trim().length > 0 && this.state.recruiter.trim().length > 0) {
      this.setState({
        editing: false,
        error: 0,
      });
      const fields = { id: this.props.thisCompany.id,
        name: this.state.name,
        image: this.state.image,
        website: this.state.website,
        recruiter: this.state.recruiter,
        jobs: this.state.jobs,
        about: this.state.about,
      };
      this.props.updateCompany(fields);
    } else {
      // if empty field, display error message
      this.setState({
        error: 1,
      });
    }
  }

  // render list of jobs
  renderJobs() {
    if (this.props.thisCompany == null) {
      return null;
    }
    if (this.props.thisCompany.jobs.length === 0) {
      return (
        <div className="jobsection">
          <b>No current job openings!</b>
        </div>
      );
    }
    const renderList = this.props.thisCompany.jobs.map((job) => {
      return (
        <div key={job.id} className="">
          <Job id={job.id} name={job.name} desc={job.desc} link={job.link} delete={this.deleteJob} />
        </div>
      );
    });
    return (
      <div className="jobsection">
        <b>Current job openings:</b>
        {renderList}
      </div>
    );
  }

  // render list of recruiters + link to their pages
  renderRecruiter() {
    let count = 0;
    const allRecruiters = this.props.allusers.map((user) => {
      if (user.company === this.props.thisCompany.name) {
        count++;
        const link = `/users/${user.id}`;
        let comma = '';
        if (count > 1) {
          comma = ', ';
        }
        return (
          <span key={user.id} >
            <span>
              {comma}
            </span>
            <Link to={link}>{user.fullname}</Link>
          </span>
        );
      }
      return null;
    });
    if (count === 0) {
      return null;
    }
    return (
      <div>
        <b>Recruiters: </b>
        {allRecruiters}
      </div>
    );
  }

  // render about section, does not show if empty
  renderAbout() {
    if (this.props.thisCompany.about != null && this.props.thisCompany.about !== '') {
      return (
        <div className="compabout">
          <b>About:</b> {this.props.thisCompany.about}
        </div>
      );
    }
    return null;
  }

  // render website section, does not show if empty
  renderSite() {
    if (this.props.thisCompany.website != null && this.props.thisCompany.website !== '') {
      return (
        <div className="compsite">
          <b>Website:</b> {this.props.thisCompany.website}
        </div>
      );
    }
    return null;
  }

  // render all
  render() {
    if (this.props.thisCompany == null) {
      // if company not yet fetched
      return (
        <div></div>
      );
    }
    let errorText = '';
    if (this.state.error === 1) {
      errorText = 'Please fill out all fields!';
    }
    let companyInfo = '';
    let buttons = '';
    if (this.props.company === this.props.thisCompany.name || this.props.role === 'organizer') {
      if (this.state.editing === true) {
        buttons = (
          <button className="editinfo" onClick={this.submitInfo}>Submit</button>
        );
      } else {
        buttons = (
          <button className="editinfo" onClick={this.editInfo}>Edit</button>
        );
      }
    }

    if (this.state.editing === false) {
      // general display, not editting
      companyInfo = (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>{this.props.thisCompany.name}</b>
            </div>
            {this.renderSite()}
            {this.renderRecruiter()}
            {this.renderAbout()}
            {buttons}
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 thumb">
            <div className="imagerow">
              <img className="compimg" src={this.props.thisCompany.image} alt="Invalid link" />
            </div>
          </div>
        </div>
      );
    } else {
      // editing display, input active
      companyInfo = (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>{this.state.name}</b>
            </div>
            <div className="compsite">
              <b>Website:</b> <input value={this.state.website} onChange={this.onWebsiteChange} />
            </div>
            <div className="compabout">
              <b>About:</b> <textarea className="aboutbox" value={this.state.about} onChange={this.onAboutChange} />
            </div>
            {buttons}
          </div>
          <div>
            {errorText}
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 thumb">
            <div className="imagerow">
              <img className="compimg" src={this.props.thisCompany.image} alt="Invalid link" />
            </div>
          </div>
        </div>
      );
    }

    // show edit functions if recruiter for the company or organizer
    if (this.props.company === this.props.thisCompany.name || this.props.role === 'organizer') {
      return (
        <div className="companyprofile" >
          {companyInfo}
          {this.renderJobs()}
          <div className="input-group col-md-10 col-md-offset-1 addjob">
            <b>Add a job/internship listing:</b>
            <input type="text" className="form-control" id="jobname" placeholder="Job Title"></input>
            <textarea className="form-control" id="jobdesc" placeholder="Description here..." rows="5" cols="80" />
            <input type="text" className="form-control" id="joblink" placeholder="Job Link"></input>
          </div>
          <button className="submitjob" onClick={this.submitJob}>Submit</button>
        </div>
      );
    } else {
      return (
        <div className="companyprofile" >
          {companyInfo}
          {this.renderJobs()}
          <div className="input-group col-md-10 col-md-offset-1 addjob"></div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (state, action) => (
  {
    thisCompany: state.companies.comp,
    user: state.auth.user,
    role: state.auth.role,
    company: state.auth.company,
    allusers: state.users.all,
  }
);

export default connect(mapDispatchToProps, { fetchCompany, updateCompany, clearCompany, fetchUsers })(CompanyShow);
