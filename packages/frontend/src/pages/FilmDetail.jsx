import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GenreButton from '../components/GenreButton';

const tmdb_url = process.env.REACT_APP_TMDB_MOVIE_URL
const tmdb_api = `?api_key=${process.env.REACT_APP_TMDB_KEY}`

export default function FilmDetail() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

            useEffect(() => {
                const fetchFilmDetail = async () => {
                    const res = await fetch(`${tmdb_url}${id}${tmdb_api}`);
                    const data = await res.json()
                    setFilm(data)
                };
                fetchFilmDetail();
            }, [id]);
    
    if (film) {
        return (
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Box className="filmContent" style={{background: `no-repeat url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${film.backdrop_path})`}}>
                            </Box>
                            <Grid item xs={12} md={4}>
                                <Box 
                                    component="img"
                                    className="filmImage" 
                                    alt={film.title}
                                    src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`} 
                                    />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <h1> {film.title}</h1>
                                <br/>
                                <p>{film.tagline}</p>
                                <p><ins className="font-weight-bold">{film.vote_average}</ins>/10</p>
                                <p> <ins className="font-weight-bold">Release Date:</ins> {new Date(film.release_date).getUTCFullYear()}</p>
                                <p className="">{film.overview}</p>
                                <GenreButton key={film.id} genres={film.genres} source={'filmdetails'}/>
                            </Grid>
                        </Grid>
                    </Box>
            </Container>
        )
        };
    };
    