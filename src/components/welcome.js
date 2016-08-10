import React from 'react';

import Counter from '../containers/counter';
import Controls from '../containers/controls';


// function based "dumb" component with no state
const Welcome = () => {
  return (
    <div>
      react+redux+react-router+webpack+babel+eslint starter

      <Counter />
      <Controls />
    </div>
  );
};


export default Welcome;
