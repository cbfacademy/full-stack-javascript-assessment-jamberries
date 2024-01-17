import {React, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";

const Film = (props) => {
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
   
   return (
    <Col>
     <Card className="filmCard">
      <Card.Img variant="top" src={poster} alt={props.film.title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}/>
      <Card.Body>
        <Card.Title className='filmTitle'>{props.film.title}</Card.Title>
        <Card.Text>{showOverview && <p>see me</p>}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
   );
}

export default Film;