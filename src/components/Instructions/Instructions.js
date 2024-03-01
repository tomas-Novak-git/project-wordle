import React from 'react';



function Instructions() {
  return <div className='instruction-box'>
    <div className='instruction-line'>
      <span className="instruct-span correct"></span>
      <p>={''} Letter and order is correct</p>
    </div>
    <div className='instruction-line'>
      <span className="instruct-span misplaced"></span>
      <p>={''} Letter is correct but order is wrong</p>
    </div>
    <div className='instruction-line'>
      <span className="instruct-span incorrect"></span>
      <p>={''} Letter is wrong</p>
    </div>
  </div>;
}

export default Instructions;
