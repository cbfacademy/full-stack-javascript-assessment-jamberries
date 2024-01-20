import { useState } from "react";
import {
    Container,
    Box,
    Grid,
    Button
} from '@mui/material';
import ActorCard from "../components/ActorCard";
import AutocompleteInput from "../components/AutocompleteInput";


export default function ActorNew() {
    const [selected, setSelected] = useState({})

    return (
        <Container >
            <Box>
                <Grid md={6}>
                    <h1 className="header mt-4"> Add an actor to the database</h1>
                </Grid>
                <Grid md={6}>
                    <p> The actor <ins>must</ins> be of Black origin. At least two Black grandparents please. </p>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <AutocompleteInput setSelected={setSelected}/>
                    </Grid>
                    <Grid item md={6}>
                        <Button variant="outlined" > Add Actors to the Database </Button> 
                    </Grid>
                </Grid>
                    
                    <Grid item >
                            {selected !== null && Object.keys(selected).length !== 0 ? 
                            <ActorCard selected={selected}/> : ''}
                 </Grid>
             </Box>
        </Container>
    )
}