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
import  SnackbarAlert  from "../components/SnackbarAlert";

const api_url = process.env.REACT_APP_API_URL

/**
 * Displays the page to add a new actor to the database
 * @returns {ReactComponentElement} New actor page
 */
export default function ActorNew() {
    const [selected, setSelected] = useState({})
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [dbMessage, setdbmessage] = useState('')

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selected)
        }

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
                postFilms()
                }})
        } catch (error) {
            console.error('Error:', error);
        }
        }

    const postFilms = async () => {
        try {
            fetch(`${api_url}/api/films`, options)
            .then(res => res.json({}))
            .then((data) => {
                if(data.dbmessage === 'success') {
                    setOpenSnack(true)
                    setdbmessage('success')
                } else {
                    setdbmessage('fail')
                }
            })
        } catch (error) {
            console.error('Error:', error);
        }
        }

    const handleActorAddClick = (event) => {
      setOpen((previousOpen) => !previousOpen);
    };

    const handleClose = (e) => {
        if(e.target.innerText === 'CONFIRM') {
            setOpen(false);
            console.log(e.target.innerText)
            postActors();

        } else {
            setOpen(false);
            console.log('bye')
            console.log(e.target.innerText)
        }
      };

    const actorSelected = selected !== null && Object.keys(selected).length !== 0 ? true : false
      

    //post actor

    //post film
   // const idArray = selected.map( item => item.id)

    return (
        <Container >
            <SnackbarAlert setOpenSnack={setOpenSnack} props={openSnack} dbMessage={dbMessage}/>
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