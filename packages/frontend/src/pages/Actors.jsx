
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActorsList from "../components/ActorsList";
import PaginationBar from "../components/PaginationBar";

export default function Actors() {

const api_url = process.env.REACT_APP_API_URL

    const [actors, setActors] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch(`${api_url}/api/actors?page=${pageNumber}`)
        .then(res => res.json({}))
        .then(({actors, pages}) => {
          setActors(actors)
          setPages(pages)
      })
      .catch(error => console.error(error))
      }, [pageNumber]);

    return (
        <Container fluid>
            <Row>
                <Col>
                <h1 className="header mt-4"> Actors</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
         
                </Col>
            </Row>
            <Row className="mt-4">
                 <ActorsList actors={actors}/>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <PaginationBar pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </Col>
            </Row>
        </Container>
    )
}