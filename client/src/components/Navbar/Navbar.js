import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {
    searchCategory: "By Artist"
  };

  //Depending on the current path, this component sets the "active" class on the appropriate navigation link item
  searchWhat = dropDownItem => {
    this.setState({ searchCategory: dropDownItem });
  };

  renderPlaceholder = () => {
    switch (this.state.searchCategory) {
      case "By Artist":
        return "Enter Artist Here...";
      case "By Artist Location":
        return "Enter Artist Location...";
      case "By Venue":
        return "Enter Venue Here...";
      case "By Venue Location":
        return "Enter Venue Location...";
      default:
        return "<< Choose Search Option";
    }
  };

  render() {
    console.log(this.state.searchCategory);
    return (
      <nav className="navbar navbar-custom navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          ON THE WALL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Become an artist <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#">
                Become a venue <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#">
                About us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown pull-right navbar-right">
              <a
                class="nav-link navbar-right dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="fas fa-search"></span> {this.state.searchCategory}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.searchWhat("By Artist")}
                >
                  By Artists
                </div>
                <div
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.searchWhat("By Artist Location")}
                >
                  By Artist Location
                </div>
                <div className="dropdown-divider" />
                <div
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.searchWhat("Venue")}
                >
                  By Venue
                </div>
                <div
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.searchWhat("By Venue Location")}
                >
                  By Venue Location
                </div>
              </div>
            </li>
            <li>
              <form id="searchForm" className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder={this.renderPlaceholder()}
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
