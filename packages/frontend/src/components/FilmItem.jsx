import {React} from 'react';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const FilmItem = (props) => {
   // const [showOverview, setShowOverview] = useState(false);
   
   // const handleMouseEnter = e => {
   //    e.target.classList.add("blurPoster")
   //    setShowOverview(true)
   // }
   // const handleMouseleave = e => {
   //    e.target.classList.remove("blurPoster")
   //    setShowOverview(false)
   // }

   return (
    <Col>
         <Card 
            hoverable
            key={props.film._id} 
            className="filmCard" 
            border="light">
            <Link 
               to={`/films/${props.film.tmdb_id}`}> 
               <Card.Img 
                  variant="top" 
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${props.film.poster_path}`} 
                  alt={props.film.title} />
            </Link>
            <Card.Body>
               <Card.Text className='filmTitle'>{props.film.title}</Card.Text> 
            </Card.Body>
         </Card>
    </Col>
   );
}

export default FilmItem;