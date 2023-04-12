/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='loader'>
      <h3 className='yellow'></h3>
      <h3 className='red'></h3>
      <h3 className='blue'></h3>
      <h3 className='violet'></h3>
    </div>
  );
};

export default Spinner;
