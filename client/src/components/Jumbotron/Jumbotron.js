import React from "react";

const Jumbotron = props => (
  <div
    style={{
      height: 300,
      clear: "both",
      paddingTop: 120,
      textAlign: "center",
      color: "white",
      backgroundImage: `url(${props.url})`
    }}
    className="jumbotron"
  >
    <h1>Contact {props.name}</h1>
  </div>
);

export default Jumbotron;
