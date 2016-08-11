<<<<<<< HEAD
// use an api for scheduling
import React from 'react';

export default function Companies(props) {
  return (
    <div id="companies">
      <p>There will be companies here soon.</p>
    </div>
  );
}
=======
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

export default Welcome;
>>>>>>> rob
