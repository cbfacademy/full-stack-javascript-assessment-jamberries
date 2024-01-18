import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GenreButton from "../components/GenreButton";

const api_url = process.env.REACT_APP_API_URL

export default function Genres() {
    const [genres, setGenres] = useState([]);

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
                    <h1 className="header mt-4">Genres</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                </Col>
            </Row>
                <Col>
                <div className="genreDiv">
                    <GenreButton genres={genres}/>
                </div>
                </Col>
            <Row>

            </Row>
            
        </Container>
    )
}