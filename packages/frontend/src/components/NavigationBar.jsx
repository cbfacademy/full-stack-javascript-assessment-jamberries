import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavigationBar() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light" id="navBar">
            <Container>
                <Navbar.Brand href="#home">The Database</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home"><NavLink to="/">Home </NavLink></Nav.Link>
                        <Nav.Link href="link"><NavLink to="/films">Films </NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}