import { useState} from "react";
import {
    Container,
    Box,
    Grid,
    Button
} from '@mui/material';
import ActorCard from "../components/ActorCard";
import Popup from "../components/Popup";
import AutocompleteInput from "../components/AutocompleteInput";

const api_url = process.env.REACT_APP_API_URL

export default function ActorNew() {
    const [selected, setSelected] = useState({})
    const [idArray, setIdArray] = useState([])
    const [open, setOpen] = useState(false);

      const postActors = async () => {
            try {
                fetch(`${api_url}/api/actors`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(selected)
                  })
                .then(res => res.json({}))
                .then((data) => {
                  if(data.data === 'Success') {
                    setIdArray(selected.map( item => item.id))
                  }})
                  .then((idArray) => {
                    postFilms()
                  })
            } catch (error) {
                console.error('Error:', error);
            }
            }

    const postFilms = async () => {
        try {
            fetch(`${api_url}/api/films`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selected)
                })
            .then(res => res.json({}))
            .then((data) => {
                if(data.data === 'Success') {
                console.log('success')
                }})
        } catch (error) {
            console.error('Error:', error);
        }
        }
    const handleActorAddClick = (event) => {
      setOpen((previousOpen) => !previousOpen);
    };

    const handleClose = (e) => {
        if(e.target.innerText === 'Confirm') {
            setOpen(false);
            postActors();

        } else {
            setOpen(false);
        }
      };

    const actorSelected = selected !== null && Object.keys(selected).length !== 0 ? true : false
      

    //post actor

    //post film
   // const idArray = selected.map( item => item.id)

    return (
        <Container >
            <Box>
                <Grid item md={6} justifyContent="center">
                    <h1 className="header mt-4"> Add an actor to the database</h1>
                    
                </Grid>
                <Grid item md={6}>
                    <p> The actor <ins>must</ins> be of Black origin. At least two Black grandparents please. </p>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={9}>
                        <AutocompleteInput setSelected={setSelected}/>
                    </Grid>
                    <Grid item md={3} mt={6}>
                        <Button variant="outlined" color="secondary" disabled={actorSelected ? false : true} onClick={handleActorAddClick} > Add Actors to the Database </Button> 
                        <Popup open={open} selected={selected} handleClose={handleClose}/>
                    </Grid>
                </Grid>
                    
                    <Grid item >
                            { actorSelected ? <ActorCard selected={selected}/> : ''}
                 </Grid>
             </Box>
        </Container>
    )
}