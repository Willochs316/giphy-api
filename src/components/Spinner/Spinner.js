/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loader">
      <div className="circle yellow"></div>
      <div className="circle red"></div>
      <div className="circle blue"></div>
      <div className="circle violet"></div>
    </div>
  );
};

export default Spinner;
