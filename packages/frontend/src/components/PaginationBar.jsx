import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

/**
 * Component for pagination
 * @component
 * @param {object} props The page details
 * @returns {ReactComponentElement} pagination component
 */
const PaginationBar = (props) => {
   
    // Create an array containing the numbers of pages
    //const pagesArray = new Array(props.pages).fill(null).map((number,index) => index) 
    function handlePageChange(event, value) {
        props.setPageNumber(value)
    }
    return (
        <Stack spacing={2}>
            <Pagination color="secondary" count={props.pages} onChange={handlePageChange} />
        </Stack>
    );
}

export default PaginationBar;