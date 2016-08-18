// show page -- show a specific post in full

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompany, updateCompany } from '../actions/index';
import Job from './job';


class CompanyShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
      website: '',
      recruiter: '',
      jobs: [],
    };

    this.submitJob = this.submitJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.renderJobs = this.renderJobs.bind(this);
  }

  componentWillMount() {
    this.props.fetchCompany(this.props.params.id);
  }

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
    };
    this.props.updateCompany(fields);
  }

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
    };
    this.props.updateCompany(fields);
  }

  renderJobs() {
    if (this.props.thisCompany == null) {
      return null;
    }
    const renderList = this.props.thisCompany.jobs.map((job) => {
      return (
        <div key={job.name} className="">
          <Job id={job.id} name={job.name} desc={job.desc} link={job.link} delete={this.deleteJob} />
        </div>
      );
    });
    return renderList;
  }

  // render function
  render() {
    if (this.props.thisCompany == null) {
      // if company not yet fetched
      return (
        <div>Loading...</div>
      );
    }
    console.log(this.props.thisCompany);
    // state not initialized, use this.props.currentPost
    return (
      <div className="companyprofile" >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 thumb companyinfo">
            <div className="compname">
              <b>{this.props.thisCompany.name}</b>
            </div>
            <div className="compsite">
              <b>Website:</b> {this.props.thisCompany.website}
            </div>
            <div className="comprecruiter">
              <b>Recruiter:</b> {this.props.thisCompany.recruiter}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 thumb">
            <div className="imagerow">
              <img className="compimg" src={this.props.thisCompany.image} alt="Invalid link" />
            </div>
          </div>
        </div>
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
  }
}

const mapDispatchToProps = (state, action) => (
  {
    thisCompany: state.companies.comp,
  }
);

export default connect(mapDispatchToProps, { fetchCompany, updateCompany })(CompanyShow);