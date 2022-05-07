import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "solid 1px white",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
