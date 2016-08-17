import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewCompany from './companyAdd';
import Company from './company';
import { createCompany, fetchCompany, deleteCompany } from '../actions/index';

class Companies extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
    };

    this.createCompany = this.createCompany.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
    this.renderCompany = this.renderCompany.bind(this);
  }

  componentWillMount() {
    this.props.fetchCompany();
  }

  componentWillReceiveProps(nextProps) {
  }

  // create a new note
  createCompany(input) {
    const newComp = { text: input, date: 'DATE' };
    this.props.createCompany(newComp);
  }

  deleteCompany(id) {
    this.props.deleteCompany(id);
  }

  renderCompany() {
    if (this.props.all == null) {
      return null;
    }
    const renderList = this.props.all.map((comp) => {
      return (
        <div key={comp.id} className="">
          <Company text={comp.text} id={comp.id} delete={this.deleteCompany} />
        </div>
      );
    });
    return renderList;
  }


  render() {
    return (
      <div>
        <div className="col-md-10 col-md-offset-1 mainpage">
          <NewCompany createCompany={this.createCompany} />
        </div>
        <div>
          {this.renderCompany()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    all: state.companies.all,
  }
);

export default connect(mapStateToProps, { createCompany, fetchCompany, deleteCompany })(Companies);
