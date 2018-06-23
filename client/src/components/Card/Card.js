import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = props => (
  <div className="card">
    {console.log("props.id= " + JSON.stringify(props))}
    <img
      className="card-img-top"
      src="https://dg19s6hp6ufoh.cloudfront.net/pictures/613209425/large/PicassoBullsHead.jpeg?1491535886"
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-artist">{props.name}</h5>
      <p className="card-location">
        {props.city}, {props.state}
      </p>
      <p className="card-title">Bull's Head</p>
      <button href="#" className="btn btn-primary btn-card">
        <Link to={"/artist/" + props.id}>Artist Bio</Link>
      </button>
    </div>
  </div>
);

export default Card;
