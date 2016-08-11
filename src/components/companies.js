import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewCompany from './companyAdd';
import { createCompany, fetchCompanies } from '../actions/index';

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.createCompany = this.createCompany.bind(this);
    this.renderCompanies = this.renderCompanies.bind(this);
  }

  componentWillMount() {
    this.props.fetchCompanies();
  }

  // create a new note
  createCompany(input) {
    const newComp = { text: input, date: 'DATE' };
    this.props.createCompany(newComp);
  }

  renderCompanies() {
    if (this.props.all.companies == null) {
      return null;
    }
    const renderList = this.props.all.companies.all.map((comp) => {
      return (
        <div key={comp.id} className="companysingle">
          <div className="companytext">
            {comp.text}
          </div>
          <div className="companydate">
            {comp.date}
          </div>
        </div>
      );
    });
    return renderList;
  }


  render() {
    return (
      <div className="companybox">
        <NewCompany createCompany={this.createCompany} />
        <div className="allcompanies">
          {this.renderCompanies()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state, action) => (
  {
    all: state,
  }
);

export default connect(mapDispatchToProps, { createCompany, fetchCompanies })(Company);
