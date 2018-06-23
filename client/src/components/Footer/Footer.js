import React from "react";
import { Link } from "react-router-dom";
// import "./Jumbotron.css";

const divStyle = {
  color: "blue",
  padding: "8px",
  position: "sticky-bottom",
  width: "100%",
  bottom: "18px",
  backgroundColor: "grey",
  height: "40px"
};

const Footer = props => (
  <div className="Footer text-center">
    <div style={divStyle}>
      <h5>FlipArtWall Production</h5>
      <h6>By Andy, Bob, Clay, Marina, and Muhammad</h6>
    </div>
  </div>
);

/* export const About = props => (
  <div style={divStyle}>
    <h3>{props.title}</h3>
  </div>
); */

export default Footer;
