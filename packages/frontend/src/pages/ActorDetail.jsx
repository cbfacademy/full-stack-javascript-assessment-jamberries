import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

const tmdb_url = process.env.REACT_APP_TMDB_ACTOR_URL
const tmdb_api = `?api_key=${process.env.REACT_APP_TMDB_KEY}`


export default function ActorDetail() {
    const { id } = useParams();
    const [actor, setActor] = useState(null);
    
    useEffect(() => {
     fetch(`${tmdb_url}${id}${tmdb_api}`)
      .then(res => res.json({}))
      .then((actor) => {
        setActor(actor)
    }, [])
    .catch(error => console.error(error))
    });

    if (actor) {
        return (
            <Container fluid>
                  <Row >
                        <Col xs={4}>
                            <Image className="actorImage mt-5" src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`} rounded></Image>
                        </Col>
                        <Col xs={6}>
                            <h1 className="mt-5"> {actor.name}</h1>
                            <br/>
                            <p>{actor.tagline}</p>
                            <p className="">{actor.biography}</p>
                            <p>{actor.birthday}</p>
                            <p>{actor.place_of_birth}</p>
                            <p>{actor.also_known_as}</p>
                        </Col>
                </Row>
            </Container>
        )
        };
    };
    