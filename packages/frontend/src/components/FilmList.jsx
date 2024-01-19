import Item from './ListItem';

function FilmList(props) {
   
    return (
        props.films.map(film => 
        <Item
        key={film._id} 
        item={film}
        title={film.title}
        cardClassName="filmCard" 
        textCardClass="filmTitle"
        link={`/films/${film.tmdb_id}`}
        image={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`}
        />)
    )
}

export default FilmList;