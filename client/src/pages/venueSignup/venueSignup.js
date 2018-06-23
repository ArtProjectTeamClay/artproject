import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class VenueSignUp extends Component {
  state = {
    venues: [],
    venuename: "",
    email: "",
    password: "",
    city: "",
    state: "",
    zipcode: "",
    website: "",
    facebook: "",
    phone: "",
    description: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadVenues = () => {
    API.getVenues()
      .then(res =>
        this.setState({
          venues: [],
          venuename: "",
          email: "",
          password: "",
          city: "",
          state: "",
          zipcode: "",
          website: "",
          facebook: "",
          phone: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.venuename && this.state.email) {
      API.saveVenue({
        venuename: this.state.venuename,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        facebook: this.state.facebook,
        website: this.state.website,
        phone: this.state.phone,
        description: this.state.description
      })
        .then(res => this.loadVenues())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Venue Sign Up</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.venuename}
                onChange={this.handleInputChange}
                name="venuename"
                placeholder="Venue Name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />

              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />

              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Venue Description (Optional)"
              />

              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (required)"
              />

              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State (required)"
              />
              <Input
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipcode"
                placeholder="Zipcode (required)"
              />
              <Input
                value={this.state.website}
                onChange={this.handleInputChange}
                name="website"
                placeholder="Website (required)"
              />
              <Input
                value={this.state.facebook}
                onChange={this.handleInputChange}
                name="facebook"
                placeholder="Facebook (required)"
              />
              <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone (required)"
              />
              <FormBtn
                disabled={!(this.state.venuename && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit Venue
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default VenueSignUp;
