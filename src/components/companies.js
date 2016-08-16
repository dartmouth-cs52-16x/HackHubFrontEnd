import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewCompany from './companyAdd';
import { createCompany, fetchCompany } from '../actions/index';

class Company extends Component {
  constructor(props) {
    super(props);
    // set state
    this.state = {
    };

    this.createCompany = this.createCompany.bind(this);
    this.renderCompany = this.renderCompany.bind(this);
  }

  componentWillMount() {
    this.props.fetchCompany();
  }

  componentWillReceiveProps(nextProps) {
    console.log('newState');
  }

  // create a new note
  createCompany(input) {
    const newComp = { text: input, date: 'DATE' };
    this.props.createCompany(newComp);
  }

  renderCompany() {
    console.log(this.props.all);
    if (this.props.all == null) {
      return null;
    }
    const renderList = this.props.all.map((comp) => {
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
    console.log('rendering');
    return (
      <div className="companybox">
        <div>
          <NewCompany createCompany={this.createCompany} />
        </div>
        <div className="allcompanies">
          {this.renderCompany()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, action) => (
  {
    all: state.companies.all,
  }
);

export default connect(mapStateToProps, { createCompany, fetchCompany })(Company);
