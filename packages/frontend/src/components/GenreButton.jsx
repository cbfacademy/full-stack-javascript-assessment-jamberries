import React  from "react";
import Button from "react-bootstrap/Button";

function GenreButton(props) {
   
    return (
        props.genres.map((genre,index) => 
            <>
        <Button 
            className="genreButton my-2" 
            variant="outline-dark" 
            key={genre.id+index}>{genre.name}</Button>{' '}
        </>)
        
    )
}

export default GenreButton;