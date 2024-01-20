import { Link } from "react-router-dom";
import ImageListItem from '@mui/material/ImageListItem';

import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const Item = (props) => {
   const image = props.image !== null ? props.image : "/img/imageNotFound.png"
  return (
        <ImageListItem key={props.image}>
          <img
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=248&fit=crop&auto=format`}
            alt={props.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={props.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`View more ${props.title}`}
                component={Link}
                to={props.link}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

  );
}

export default Item