import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavigationBar() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">The Database</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home </Link></Nav.Link>
                        <Nav.Link href="#link"><Link to="/films">Films </Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
       /* <nav className="nav">
            <ul>
               <li><Link to="/">Home</Link></li>
                <li><Link to="/films">Films</Link></li> 
            </ul>
        </nav>*/
    )
}