import React from "react";

const Card = ({ name, email, id }) => {
  return (
    //this is JSX and can only return 1 thing -- ie everything in 1st div or an array etc -- OR USING REACT.FRAGMENTS
    //tachyon styling included
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt={id} src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
