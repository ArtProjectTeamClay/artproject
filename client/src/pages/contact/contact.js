import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Contact extends Component {
  state = {
    artist: { image: [] },
    message: "",
    userEmail: "",
    userName: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  componentDidMount() {
    console.log("");
    API.getSingleArtist(this.props.match.params.id)
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.email) {
  //     API.saveArtist({
  //       name: this.state.name,
  //       email: this.state.email,
  //       password: this.state.password,
  //       city: this.state.city,
  //       state: this.state.state,
  //       zipcode: this.state.zipcode,
  //       facebook: this.state.facebook,
  //       instagram: this.state.instagram,
  //       phone: this.state.phone,
  //       biography: this.state.biography
  //     })
  //       .then(res => this.loadArtists())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron
              name={this.state.artist.name}
              url={
                this.state.artist.image == false
                  ? "https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/hm_e16dcdfe62d081b7_spcms.jpg?itok=MZslClZ9"
                  : this.state.artist.image[1].url
              }
            />
            <form>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.userEmail}
                onChange={this.handleInputChange}
                name="userEmail"
                placeholder="Email (required)"
              />

              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Message (Optional)"
              />

              <FormBtn
                disabled={!(this.state.userName && this.state.userEmail)}
                onClick={console.log("sup")}
              >
                Contact Artist
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

export default Contact;
