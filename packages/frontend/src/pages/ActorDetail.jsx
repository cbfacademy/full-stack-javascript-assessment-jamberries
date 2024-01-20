import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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

    //    
    //                         <h1 className="mt-5"> {actor.name}</h1>
    //                         <br/>
    //                         <p>{actor.tagline}</p>
    //                         <p className="">{actor.biography}</p>
    //                         <p>{actor.birthday}</p>
    //                         <p>{actor.place_of_birth}</p>
    //                         <p>{actor.also_known_as}</p>
    //                     </Col>
    //             </Row>
    //         </Container>
    //     )
    //     };
    // };
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box 
                                component="img"
                                className="actorImage" 
                                alt={actor.name}
                                src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`} 
                                />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h1> {actor.name}</h1>
                            <br/>
                            <p>{actor.tagline}</p>
                            <p className="">{actor.biography}</p>
                            <p>{actor.birthday}</p>
                            <p>{actor.place_of_birth}</p>
                        </Grid>
                    </Grid>
                </Box>
        </Container>
    )
    };
};
    