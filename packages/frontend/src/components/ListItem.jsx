import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Item = (props) => {

   return (
    <Col md={2}>
         <Card 
            hoverable
            className={props.cardClassName}
            key={props.item._id} 
            border="light">
            <Link 
               to={props.link}> 
               <Card.Img 
                  variant="top" 
                  src={props.image} 
                  alt={props.title} />
            </Link>
            <Card.Body>
               <Card.Text className={props.textCardClass}>{props.title}</Card.Text> 
            </Card.Body>
         </Card>
    </Col>
   );
}

export default Item;