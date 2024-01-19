import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActorForm from "../components/ActorForm";

const api_url = process.env.REACT_APP_API_URL

export default function ActorNew() {
    const [actors, setActors] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    // useEffect(() => {
       // fetch(`${api_url}/api/actors?page=${pageNumber}`)
    //     .then(res => res.json({}))
    //     .then(({actors, pages}) => {
    //       setActors(actors)
    //       setPages(pages)
    //   })
    //   .catch(error => console.error(error))
    //   }, [pageNumber]);

    return (
        <Container fluid>
            <Row>
                <Col>
                <h1 className="header mt-4"> Add an actor to the database</h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <p> The actor <ins>must</ins> be of Black origin. At least two Black grandparents please. </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <ActorForm/>
            </Row>
        </Container>
    )
}