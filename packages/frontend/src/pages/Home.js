import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
    return (
        <Container fluid>
            <Row className="banner">
                <Col data-bs-theme="dark">
                <h1>Home</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}> Hi
                </Col>
                <Col md={{ span: 4, offset: 4 }}> Hi 2
                </Col>
            </Row>
            
        </Container>
        
    )
}