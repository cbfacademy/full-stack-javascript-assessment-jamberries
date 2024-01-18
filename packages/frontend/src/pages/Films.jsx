import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilmList from "../components/FilmList";
import PaginationBar from "../components/PaginationBar";
import GenreButton from "../components/GenreButton";

const api_url = process.env.REACT_APP_API_URL

export default function Films() {
    const [films, setFilms] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
      fetch(`${api_url}/api/films?page=${pageNumber}`)
      .then(res => res.json({}))
      .then(({films, pages}) => {
        setFilms(films)
        setPages(pages);
    })
    .catch(error => console.error(error));
    }, [pageNumber]);

    useEffect(() => {
        fetch(`${api_url}/api/genres`)
        .then(res => res.json({}))
        .then((genres) => {
          setGenres(genres)
      })
      .catch(error => console.error(error));
      }, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                <h1 className="header mt-4"> Films</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <div className="genreDiv">
                        <GenreButton genres={genres}/>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <FilmList films={films}/>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <PaginationBar pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </Col>
            </Row>
        </Container>
    )
}