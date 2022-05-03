import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc shadow-5 bg-light-green dib br3 pa3 ma2 grow">
      <img alt={id} src={`https://robohash.org/${id}?bgset=bg1`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
