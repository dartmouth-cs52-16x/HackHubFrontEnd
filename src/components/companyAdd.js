import React from 'react';
import { Link } from 'react-router';


// function based "dumb" component with no state
const compnayAdd = () => {
  return (
    <div>
      <Link to="/posts/new">Add Company</Link>
    </div>
  );
};


export default companyAdd;
