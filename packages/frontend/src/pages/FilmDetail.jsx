import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

//const api_url = process.env.REACT_APP_API_URL
const tmdb_url = process.env.REACT_APP_TMDB_MOVIE_URL
const tmdb_api = `?api_key=${process.env.REACT_APP_TMDB_KEY}`

export default function FilmDetail() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [poster, setPoster] = useState();
    const [backdrop, setBackdrop] = useState();
    const [releaseDate, setYear] = useState();

    useEffect(() => {
      //fetch(`${api_url}/api/films/${id}`)
      fetch(`${tmdb_url}${id}${tmdb_api}`)
      .then(res => res.json({}))
      .then((film) => {
        setFilm(film)
        setPoster(`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`)
        setBackdrop(`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${film.backdrop_path}`)
        setYear(new Date(film.release_date))
    })
    .catch(error => console.error(error));
    });
    if (film) {
        return (
            <Container fluid>
                <Row className="filmContent" style={{background: `no-repeat url(${backdrop})`}}>
                </Row>
                  <Row >
                        <Col xs={4}>
                            <Image className="filmImage mt-5" src={poster} rounded></Image>
                
                        </Col>
                        <Col xs={6}>
                            <h1 className="mt-5"> {film.title}</h1>
                            <br/>
                            <p>{film.tagline}</p>
                            <p><ins className="font-weight-bold">{film.vote_average}</ins>/10</p>
                            <p> <ins className="font-weight-bold">Release Date:</ins> {releaseDate.getUTCFullYear()}</p>
                            <p className="">{film.overview}</p>
                        </Col>
                </Row>
            </Container>
        )
        };
    };
    