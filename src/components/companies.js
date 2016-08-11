import React from 'react';
import CompanyAdd from './companyAdd';

const Companies = React.createClass({
  render() {
    return (
      <companyAdd />
      {this.props.children}
    );
  }
});

export default companies;
