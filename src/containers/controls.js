import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.increment} className="btn btn-info">+</button>
      <button onClick={props.decrement} className="btn btn-warning">-</button>
    </div>
  );
};


// react-redux glue -- outputs Container that knows how to call actions
export default connect(null, actions)(Controls);
