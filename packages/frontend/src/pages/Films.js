import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilmList from "../components/FilmList";

export default function Films() {
    const [films, setFilms] = useState([]);
    // const [pageNumber, setPageNumber] = useState(0);
    // const [noOfPages, setNoOfPages] = useState(0);

    // const pages = new Array(noOfPages).fill(null).map((v,i) => i)

    useEffect(() => {
      //  fetch(process.env.REACT_APP_API_URL + `/api/films?page=${pageNumber}`)
      fetch(process.env.REACT_APP_API_URL + `/api/films`)
      .then(res => res.json({}))
        .then(({films, pages}) => {
            setFilms(films)
          //  setNoOfPages(pages);
        })
        .catch(error => console.error(error));
    }, []); 
    //}, [pageNumber]);

    // const goToPreviousPage = () => {
    //     setPageNumber(Math.max(0, pageNumber -1));
    // }

    // const goToNextPage = () => {
    //     setPageNumber(Math.min(noOfPages -1, pageNumber +1));
    // };
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Films</h1>
                </Col>
            </Row>
            <Row>
                <FilmList films={films}/>
            </Row>
            <Row>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}