import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  float: "left",
  padding: "12px"
};

export default props => (
  <div style={divStyle}>
    <h3>{props.name}'s Bio</h3>
    <p>{props.description}</p>
  </div>
);
