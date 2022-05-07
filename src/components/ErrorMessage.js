import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className='tc'>
      <h2 style={{ color: "white", paddingTop: "10rem" }}> {error} </h2>
    </div>
  );
};
export default ErrorMessage;
