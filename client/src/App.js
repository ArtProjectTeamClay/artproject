// import React, { Component } from "react";
// import { VendorName } from "./VendorName";
// import { About } from "./About";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <VendorName />
//         {/* <About title="About Artist" /> */}
//         <About title="About Venue" />
//       </div>
//     );
//   }
// }

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Artist from "./pages/artist";
import Images from "./pages/images";
import Home from "./pages/home";
import Venue from "./pages/venue";
import VenueSignUp from "./pages/venueSignup";
import Contact from "./pages/contact";
import ArtistSignUp from "./pages/artistSignup";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
/* import Footer from "./components/Footer"; */

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Books} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/artist/:id" component={Artist} />

        <Route path="/artist/:id/contact" component={Contact} />

        <Route path="/images" component={Image} />
        <Route path="/images/:id" component={Image} />
        <Route exact path="/artistsignup" component={ArtistSignUp} />
        <Route exact path="/venuesignup" component={VenueSignUp} />
        <Route exact path="/venue" component={Venue} />

        {/* <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
