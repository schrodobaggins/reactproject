import { Link } from "react-router-dom"
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NaviBar.css'
import Logo from './shylogo.png';

function NavBar() {

  return (
    <div>
        <Navbar className="bg-myBlue" >
          <Container>
            <Navbar.Brand className="navbar-text" href="/"><img width="100px" height="auto" src={Logo} alt="logo"/></Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/results/" className="navbar-text">All</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;
