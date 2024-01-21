import { useState, useEffect} from "react";
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
            const fetchFilms = async () => {
                const res = await fetch(`/${api_url}/api/films?page=${pageNumber}${genreQuery}`);
                const data = await res.json()
                setFilms(data.films)
                setPages(data.pages);
            };
            fetchFilms();
        }, [pageNumber, genreQuery]);

      useEffect(() => {
        const fetchGenres = async () => {
            const res = await fetch(`/${api_url}/api/genres`);
            const data = await res.json()
            setGenres(data)
        };
        fetchGenres();
    }, []);

    return (
        <Container>
            <Box>
                <Grid>
                    <h1> Films</h1>
                </Grid>
                <Grid container >
                        <Box className="genreDiv">
                            <GenreButton genres={genres} setGenreQuery={setGenreQuery} source={'films'}/>
                        </Box>
                </Grid>
                <Grid >
                    <FilmList films={films} cols={5}/>
                </Grid>
                <Grid>
                        <PaginationBar pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </Grid>
            </Box>
            
        </Container>
    )
}