import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";

function GenreButton(props) {

    const query = '&&genre='

    const handleGenreClick = (e) => {
        props.setGenreQuery(query + e.target.value)
    }
    const properties = {
        // component: Link,
        // to: '/films'
        onClick : handleGenreClick
    };

    return (
        props.genres.map((genre,index) => 
            <>
        <Button 
            className="genreButton" 
            variant="outlined" 
            color="info"
            key={genre.id+index}
            {...(props.source === 'films'? properties : {})}
            value={genre.tmdb_id}>{genre.name}
            </Button>{' '}
        </>)
        
    )
}

export default GenreButton;