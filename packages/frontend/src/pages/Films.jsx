import { useState, useEffect, useMemo} from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FilmList from "../components/FilmList";
import PaginationBar from "../components/PaginationBar";
import GenreButton from "../components/GenreButton";

const api_url = process.env.REACT_APP_API_URL

/**
 * Displays the films in the database, which can be filtered by genre
 * @returns {ReactComponentElement} Film List page
 */
export default function Films() {
    const [films, setFilms] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [genres, setGenres] = useState([]);
    const [genreQuery, setGenreQuery] = useState('');

  const fetchFilmList = useMemo(() => async () => {
    try {
        fetch(`${api_url}/api/films?page=${pageNumber}${genreQuery}`)
        .then(res => res.json({}))
        .then(({films, pages}) => {
          setFilms(films)
          setPages(pages)
      })
      .catch(error => console.error(error))
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
   }, [pageNumber, genreQuery]);;

    useEffect(() => {
        fetchFilmList();
    }, [fetchFilmList]);


    const fetchGenreList = useMemo(() => async () => {
        try {
            fetch(`${api_url}/api/genres`)
            .then(res => res.json({}))
            .then((genres) => {
            setGenres(genres)
        })
        .catch(error => console.error(error))
        } catch (error) {
        console.error('Error fetching product list:', error);
        }
    }, []);;

    useEffect(() => {
        fetchGenreList();
    }, [fetchGenreList]);

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