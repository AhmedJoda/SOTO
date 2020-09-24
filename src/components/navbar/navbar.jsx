import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "./navbar.css";
import SOTO from "../../assests/imags/Layer1.png";

export default function MyNavbar({ bg, sticky }) {
  return (
    <Navbar bg={bg} sticky={sticky} variant="dark">
      <Navbar.Brand href="#home">
        <Image width="50" src={SOTO} />
      </Navbar.Brand>
      <Nav className="mr-auto navlinks">
        <Nav.Link href="#Community">Community</Nav.Link>
        <Nav.Link href="about us">about us</Nav.Link>
      </Nav>
    </Navbar>
  );
}
