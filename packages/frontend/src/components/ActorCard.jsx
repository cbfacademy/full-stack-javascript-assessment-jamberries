import {
    Card,
    CardContent,
    Avatar, 
    Typography
} from '@mui/material';

import Box from '@mui/material/Box';

export default function ActorCard(props) {
  return (
    <>
    <Box m={3} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
    {props.selected.map(actor =>
            <Card mt={3} sx={{ maxWidth: 345 , margin: 2 }} key={actor.id+actor.name} variant="outlined">
                <CardContent>
                        <Avatar alt={actor.name} src={`https://image.tmdb.org/t/p/w90_and_h90_face/${actor.profile_path}`} />
                    <Typography gutterBottom variant="h5" component="h5">
                        {actor.name}
                    </Typography>
                </CardContent>
          </Card>
          )}
    </Box>
    </>
  );
}