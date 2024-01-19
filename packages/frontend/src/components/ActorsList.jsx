import Item from './ListItem';

function ActorsList(props) {
   
    return (
        props.actors.map(actor => 
        <Item
        key={actor._id} 
        item={actor}
        title={actor.name}
        cardClassName="actorCard" 
        textCardClass="actorTitle"
        link={`/actors/${actor.tmdb_id}`}
        image={`https://media.themoviedb.org/t/p/w138_and_h175_face/${actor.poster_path}`}
        />)
    )
}

export default ActorsList;