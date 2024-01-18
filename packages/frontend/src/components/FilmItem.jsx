import {React, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const FilmItem = (props) => {
   const [showOverview, setShowOverview] = useState(false)
   
   const handleMouseEnter = e => {
      e.target.classList.add("blurPoster")
      setShowOverview(true)
   }
   const handleMouseleave = e => {
      e.target.classList.remove("blurPoster")
      setShowOverview(false)
   }
    const poster = (props.film.poster_path) ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${props.film.poster_path}` : '../public/imageNotFound.png'
   
    let film_url = `/films/${props.film.tmdb_id}`

   return (
    <Col>
     
         <Card hoverable key={props.film._id} className="filmCard">
            <Link to={film_url}> 
               <Card.Img variant="top" src={poster} alt={props.film.title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}/>
            </Link>
            <Card.Body>
               <Card.Title className='filmTitle'>{props.film.title}</Card.Title> 
              <Card.Text>{showOverview}</Card.Text>
            </Card.Body>
         </Card>
        
    </Col>
   );
}

export default FilmItem;