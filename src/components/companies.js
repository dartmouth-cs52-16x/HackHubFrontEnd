import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Company from './company';
import { fetchCompanies, deleteCompany } from '../actions/index';

class Companies extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
    };

    this.deleteCompany = this.deleteCompany.bind(this);
    this.renderCompany = this.renderCompany.bind(this);
  }

  componentWillMount() {
    this.props.fetchCompanies();
  }

  componentWillReceiveProps(nextProps) {
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
          <Company name={comp.name} id={comp.id} delete={this.deleteCompany} />
        </div>
      );
    });
    return renderList;
  }


  render() {
    return (
      <div>
        <div className="col-md-2 col-md-offset-9 mainpage">
          <Link to="new_company">Add Company</Link>
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

export default connect(mapStateToProps, { fetchCompanies, deleteCompany })(Companies);
