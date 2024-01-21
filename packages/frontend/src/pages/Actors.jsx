import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ActorsList from "../components/ActorsList";
import PaginationBar from "../components/PaginationBar";
import Button from "react-bootstrap/Button";

const api_url = process.env.REACT_APP_API_URL;

export default function Actors() {
    const [actors, setActors] = useState([]);
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

        useEffect(() => {
            const fetchActors = async () => {
                const res = await fetch(`${api_url}/api/actors?page=${pageNumber}`);
                const data = await res.json();
                setActors(data.actors)
                setPages(data.pages)
            };
            fetchActors();
        },[pageNumber])

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
                    <ActorsList actors={actors}/>
                </Grid>
                <Grid>
                    <PaginationBar pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </Grid>
            </Box>
        </Container>
    )
}