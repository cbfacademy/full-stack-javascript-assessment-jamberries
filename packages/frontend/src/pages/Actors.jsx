import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ActorsList from "../components/ActorsList";
import PaginationBar from "../components/PaginationBar";
import Button from "react-bootstrap/Button";

const api_url = process.env.REACT_APP_API_URL;

/**
 * Displays the page to view all actors in the database
 * @returns {ReactComponentElement} List of actor page
 */
export default function Actors() {
    const [actors, setActors] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    const fetchActorList = useMemo(() => async () => {
        try {
            fetch(`${api_url}/api/actors?page=${pageNumber}`)
            .then(res => res.json({}))
            .then(({actors, pages}) => {
              setActors(actors)
              setPages(pages)
          })
          .catch(error => console.error(error))
        } catch (error) {
          console.error('Error fetching product list:', error);
        }
       }, [pageNumber]);
    
        useEffect(() => {
            fetchActorList();
        }, [fetchActorList]);

    return (
        <Container>
            <Box>
                <Grid>
                    <h1> Actors</h1>
                </Grid>
                <Grid>
                    <Button className="buttonLink" variant="link" as={Link} to="/actor-new"> + Add an actor</Button>{' '}
                </Grid>
                <Grid >
                    <ActorsList actors={actors} cols={5}/>
                </Grid>
                <Grid>
                    <PaginationBar pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </Grid>
            </Box>
        </Container>
    )
}