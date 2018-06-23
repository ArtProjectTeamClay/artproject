import React, { Component } from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import "./home.css";

class Home extends Component {
  state = {
    artist: []
  };

  componentDidMount() {
    console.log("");
    API.getArtists()
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="home-page">
        <div className="row justify-content-center">
          <button type="button" className="btn btn-outline-primary btn-host">
            Become a host
          </button>
          <button type="button" className="btn btn-outline-primary btn-artist">
            Become an artist
          </button>
        </div>

        <Hero backgroundImage="https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/hm_e16dcdfe62d081b7_spcms.jpg?itok=MZslClZ9">
          <h1>ON THE WALL</h1>
          <h2>Where artists and venues connect </h2>
        </Hero>
        <div className="row justify-content-center home-cards">
          {this.state.artist.map(artist => (
            <Card
              key={artist._id}
              id={artist._id}
              name={artist.name}
              city={artist.city}
              state={artist.state}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
