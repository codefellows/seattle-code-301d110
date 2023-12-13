import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>My Favorite Dogs</Navbar.Brand>
        <NavItem variant="light"><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/dogs" className="nav-link">Dogs</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
