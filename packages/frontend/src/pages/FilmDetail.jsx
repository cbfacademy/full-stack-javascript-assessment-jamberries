import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import GenreButton from '../components/GenreButton';

//const api_url = process.env.REACT_APP_API_URL
const tmdb_url = process.env.REACT_APP_TMDB_MOVIE_URL
const tmdb_api = `?api_key=${process.env.REACT_APP_TMDB_KEY}`


export default function FilmDetail() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
      //fetch(`${api_url}/api/films/${id}`)
     fetch(`${tmdb_url}${id}${tmdb_api}`)
      .then(res => res.json({}))
      .then((film) => {
        setFilm(film)
    }, [])
    .catch(error => console.error(error));
    });
    if (film) {
        return (
            <Container fluid>
                <Row className="filmContent" style={{background: `no-repeat url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${film.backdrop_path})`}}>
                </Row>
                  <Row >
                        <Col xs={4}>
                            <Image className="filmImage mt-5" src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`} rounded></Image>
                
                        </Col>
                        <Col xs={6}>
                            <h1 className="mt-5"> {film.title}</h1>
                            <br/>
                            <p>{film.tagline}</p>
                            <p><ins className="font-weight-bold">{film.vote_average}</ins>/10</p>
                            <p> <ins className="font-weight-bold">Release Date:</ins> {new Date(film.release_date).getUTCFullYear()}</p>
                            <p className="">{film.overview}</p>
                            <GenreButton key={film.id} genres={film.genres}/>
                        </Col>
                </Row>
            </Container>
        )
        };
    };
    