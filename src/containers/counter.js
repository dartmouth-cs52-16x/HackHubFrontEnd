import React from 'react';
import { connect } from 'react-redux';


const Counter = (props) => {
  return (
    <div>
      Current Count: {props.count}
    </div>
  );
};


const mapStateToProps = (state) => (
  {
    count: state.count,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, null)(Counter);
