import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" bg-primary ">
      <Container>
        <Link to="/news">
          <Navbar.Brand className="text-muted" as="span">KUN.UZ</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="offset-1 gap-3">
            <Link to="/news">
              <Nav.Link className="text-white" as="span">Home</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link className="text-white" as="span">Business</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link className="text-white" as="span">Entertainment</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link className="text-white" as="span">General</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link className="text-white  hover-overlay"  as="span">Health</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link className="text-white" as="span">Science</Nav.Link>
            </Link>
            <Link to="/">
              <Nav.Link className="text-white" as="span">Sports</Nav.Link>
            </Link>
            <Link to="/">
              <Nav.Link className="text-white" as="span">Technology</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
