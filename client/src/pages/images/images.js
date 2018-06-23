import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import Jumbotron from "../../components/Jumbotron";
import Hero from "../../components/Hero";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Images extends Component {
  state = {
    artist: {},
    imageUrl: "",
    imageTitle: "",
    description: "",
    price: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("");
    API.getSingleArtist(this.props.match.params.id)
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }
  loadArtists = () => {
    API.getArtists()
      .then(res =>
        this.setState({
          imageUrl: "",
          imageTitle: "",
          description: "",
          price: ""
        })
      )
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      API.saveArtist({
        imageUrl: this.state.imageUrl,
        imageTitle: this.state.imageTitle,
        description: this.state.description,
        price: this.state.price
      })
        .then(res => this.loadArtists())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <div>
          <Hero backgroundImage="https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/hm_e16dcdfe62d081b7_spcms.jpg?itok=MZslClZ9">
            <h1>{this.state.artist.name}</h1>
            <h2>
              {this.state.artist.city}, {this.state.artist.state}
            </h2>
          </Hero>

          <h1>HOLD FOR ARTIST PAGE YO!!!!!!!</h1>
        </div>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.artist.name} by {this.state.artist.email}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.artist.biography}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Artist</Link>
          </Col>
          <Card
            name={this.state.artist.name}
            city={this.state.artist.city}
            state={this.state.artist.state}
          />
        </Row>
        <Row>
          <form>
            <Input
              value={this.state.imageUrL}
              onChange={this.handleInputChange}
              name="imageUrl"
              placeholder="Image URL"
            />
            <Input
              value={this.state.imageTitle}
              onChange={this.handleInputChange}
              name="imageTitle"
              placeholder="Image Title"
            />
            <Input
              value={this.state.price}
              onChange={this.handleInputChange}
              name="price"
              placeholder="Price "
            />
            <Input
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              placeholder="Description "
            />
            <FormBtn
              disabled={!(this.state.name && this.state.email)}
              onClick={this.handleFormSubmit}
            >
              Submit Artist
            </FormBtn>
          </form>
        </Row>
      </Container>
    );
  }
}

export default Images;

// const Artist = () => (
//   <div>
//     <Hero backgroundImage="https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/hm_e16dcdfe62d081b7_spcms.jpg?itok=MZslClZ9">
//       <h1>PABLO PICASSO</h1>
//       <h2>Raleigh, NC </h2>
//     </Hero>

//     <h1>HOLD FOR ARTIST PAGE YO!!!!!!!</h1>
//   </div>
// );

// export default Artist;
