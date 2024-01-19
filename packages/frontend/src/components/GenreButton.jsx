import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function GenreButton(props) {

    const query = '&&genre='
    const properties = {
        component: Link,
        to: '/films'
    };

    return (
        props.genres.map((genre,index) => 
            <>
        <Button 
            className="genreButton" 
            variant="outlined" 
            color="info"
            key={genre.id+index}
            onClick={(e) => props.setGenreQuery(query + e.target.value)}
            {...(props.source === 'filmdetails'? properties : {})}
            value={genre.tmdb_id}>{genre.name}
            </Button>{' '}
        </>)
        
    )
}

export default GenreButton;