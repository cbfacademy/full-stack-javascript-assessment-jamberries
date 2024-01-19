import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FilmList from "../components/FilmList";
import PaginationBar from "../components/PaginationBar";
import GenreButton from "../components/GenreButton";

const api_url = process.env.REACT_APP_API_URL

export default function Films() {
    const [films, setFilms] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [genres, setGenres] = useState([]);
    const [genreQuery, setGenreQuery] = useState('');

    useEffect(() => {
        fetch(`${api_url}/api/films?page=${pageNumber}${genreQuery}`)
        .then(res => res.json({}))
        .then(({films, pages}) => {
          setFilms(films)
          setPages(pages)
      })
      .catch(error => console.error(error))
      }, [pageNumber, genreQuery]);

    useEffect(() => {
        fetch(`${api_url}/api/genres`)
        .then(res => res.json({}))
        .then((genres) => {
          setGenres(genres)
      })
      .catch(error => console.error(error))
      }, []);

    return (
        <Container>
            <Box>
                <Grid>
                    <h1> Films</h1>
                </Grid>
                <Grid md={{ span: 10, offset: 1 }}>
                        <Box className="genreDiv">
                            <GenreButton genres={genres} setGenreQuery={setGenreQuery} source={'films'}/>
                        </Box>
                </Grid>
                <Grid >
                    <FilmList films={films}/>
                </Grid>
                <Grid>
                        <PaginationBar pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </Grid>
            </Box>
            
        </Container>
    )
}