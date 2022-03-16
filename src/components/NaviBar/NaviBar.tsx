import { Link } from "react-router-dom"
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NaviBar.css'

function NavBar() {

  return (
    <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand className="navbar-text" href="/">Shyclopedia</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/results/" className="navbar-text">All</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;
