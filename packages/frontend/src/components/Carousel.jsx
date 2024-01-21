import Carousel from 'react-bootstrap/Carousel';

export default function HomeCarousel(props) {
  return (
    <Carousel data-bs-theme="dark">
        {props.films.map(film => 
      <Carousel.Item key={`${film.title}Carousel`}>
        <img
          className="d-block w-100"
          src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${film.backdrop_path}`} 
          alt={film.title}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      )}
    </Carousel>
  );
}
