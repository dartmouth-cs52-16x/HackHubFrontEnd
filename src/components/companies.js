import React from 'react';
import CompanyAdd from './companyAdd';

const Companies = React.createClass({
  render() {
    return (
      <div>
        <CompanyAdd />
        {this.props.children}
      </div>
    );
  },
});

export default Companies;
