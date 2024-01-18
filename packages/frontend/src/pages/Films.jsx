import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilmList from "../components/FilmList";
import PaginationBar from "../components/PaginationBar";

const api_url = process.env.REACT_APP_API_URL

export default function Films() {
    const [films, setFilms] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);


    useEffect(() => {
      fetch(`${api_url}/api/films?page=${pageNumber}`)
      .then(res => res.json({}))
      .then(({films, pages}) => {
        setFilms(films)
        setPages(pages);
    })
    .catch(error => console.error(error));
    }, [pageNumber]);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Films</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <PaginationBar pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </Col>
            </Row>
            <Row>
                <FilmList films={films}/>
            </Row>
            
        </Container>
    )
}