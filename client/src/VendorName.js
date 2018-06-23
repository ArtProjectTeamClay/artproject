import React from "react";

const divStyle = {
  textAlign: "center",
  color: "blue",
  padding: "50px",
  backgroundColor: "grey",
  height: "170px"
};

// VendorName renders a bootstrap list item
export const VendorName = props => (
  <div style={divStyle}>
    <h1>Gloria's Coffee</h1>
    <h3>Raleigh, NC</h3>
  </div>
);
