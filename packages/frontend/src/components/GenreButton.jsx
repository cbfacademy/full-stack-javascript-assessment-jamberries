import React  from "react";
import Button from 'react-bootstrap/Button';

function GenreButton(props) {
   
    return (
        props.genres.map(genre => 
            <>
        <Button variant="outline-dark" key={props.filmId+genre.id}>{genre.name}</Button>{' '}
        </>)
        
    )
}

export default GenreButton;