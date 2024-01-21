import { useState, useEffect} from "react";
import {
    Box ,
    Grid, 
    Container ,
    Typography
}from '@mui/material';
import FilmList from "../components/FilmList";
import HomeCarousel from "../components/Carousel";

const api_url = process.env.REACT_APP_API_URL

export default function Home() {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        const fetchFilms = async () => {
            const res = await fetch(`${api_url}/api/home-page`);
            const data = await res.json()
            setFilms(data)
        };
        fetchFilms();
    }, []);


  return (
    <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={6} mt={5}>
                    {/* <Typography variant="h4">The Black Movie Database</Typography> */}
                    <HomeCarousel films={films}/>
                </Grid>
                <Grid item xs={6} mt={5}>
                     <Typography variant="h4">The Black Movie Database</Typography> <br/>
                    <h4>Love</h4>
                    <h4>Drama</h4>
                    <h4>Humour</h4>
                    <Typography sx={{color:"secondary" }} color="secondary" variant="h4">Black stories </Typography>
                    <br/><br/>
                    <p>...There are some sneaks but its early days yet.</p>
                </Grid>
               
            </Grid>
            <Grid item mt={5}>
                    <FilmList films={films} cols={7}/>
                </Grid>
        </Box>
    </Container>
  );
}
