import { Link } from "react-router-dom"
import './Navibar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navibar() {

  return (
    <Navbar bg="myBlue" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
       Shyclopdia
    </Navbar.Brand>
      <Nav className="me-auto navbar-nav">
        <Nav.Link href="#random">Random</Nav.Link>
        <Nav.Link href="#submit">Submit</Nav.Link>
    </Nav>
    </Container>

</Navbar>
  )
}

export default Navibar;
