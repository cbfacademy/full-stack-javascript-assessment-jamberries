import Item from './ListItem';
import ImageList from '@mui/material/ImageList';

function ActorsList(props) {
    return (
        <ImageList cols={5}>
            {props.actors.map(actor => 
                <Item
                    key={actor._id} 
                    item={actor}
                    title={actor.name}
                    cardClassName="actorCard" 
                    textCardClass="actorTitle"
                    link={`/actors/${actor.tmdb_id}`}
                    image={actor.profile_path ? `https://media.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}` : null}
                />
             )}
        </ImageList>
    )
}

export default ActorsList;