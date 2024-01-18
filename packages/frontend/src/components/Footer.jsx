import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export default function Footer (){
      /*  async function displayButtons() {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    }*/
    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                <h3>A-Z List | Search Through Films by Alphabet</h3>
                <ButtonToolbar aria-label="Toolbar with alphabet buttons">
                    <ButtonGroup aria-label="Alphabet buttons">
                        <Button>8</Button>
                        
                    </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
        </Container>
        
    )
}