import Item from './ListItem';
import ImageList from '@mui/material/ImageList';

function FilmList(props) {
    return (
    <ImageList cols={5}>
        {props.films.map(film => 
            <Item
                key={film._id} 
                item={film}
                title={film.title}
                cardClassName="filmCard" 
                textCardClass="filmTitle"
                link={`/films/${film.tmdb_id}`}
                image={film.poster_path ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}` : null}
            /> 
        )}
    </ImageList>
    )
    
}

export default FilmList;