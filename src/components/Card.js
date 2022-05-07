import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 z-depth-5'>
      <img
        className='cards'
        alt={id}
        src={`https://robohash.org/${id}?bgset=bg1`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
