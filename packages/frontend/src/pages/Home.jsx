import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 className="header mt-4"> Home</h1>
                </Grid>
                <Grid item xs={6} md={6}>
                    <h1 className="header mt-4"> Home</h1>
                </Grid>
                <Grid item xs={6} md={6}>
                    <h1 className="header mt-4"> Home</h1>
                </Grid>
            </Grid>
        </Box>
    </Container>
  );
}
