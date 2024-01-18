import React  from "react";
import Film from './FilmItem';

function FilmList(props) {
   
    return (
        props.films.map(film => <Film key={film._id} film={film}/>)
        
    )
}

export default FilmList;