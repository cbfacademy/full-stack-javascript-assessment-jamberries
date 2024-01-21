
import { ImageList } from '@mui/material';
import Item from './ListItem';

/**
 * Component for the list of films, maps the film objects and passes props to the ImageList item
 * @component
 * @param {object} props The film details
 * @returns {ReactComponentElement} Image grid component
 */
function FilmList(props) {
    return (
        <ImageList cols={props.cols}>
            {props.films.map(film => 
                <Item
                    key={film._id} 
                    item={film}
                    title={film.title}
                    cardClassName="filmCard" 
                    textCardClass="filmTitle"
                    link={`/films/${film.tmdb_id}`}
                    image={ film.poster_path ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}` : null}
                /> 
            )}
        </ImageList>
        )
}

export default FilmList;