import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Dogs from './Dogs';
import About from './About';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dogs" element={<Dogs />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
