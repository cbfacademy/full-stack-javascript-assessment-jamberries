import Button from "react-bootstrap/Button";

function GenreButton(props) {

    const query = '&&genre='
   
    return (
        props.genres.map((genre,index) => 
            <>
        <Button 
            className="genreButton my-2" 
            variant="outline-dark" 
            key={genre.id+index}
            onClick={(e) => props.setGenreQuery(query + e.target.value)}
            value={genre.tmdb_id}>{genre.name}
            </Button>{' '}
        </>)
        
    )
}

export default GenreButton;