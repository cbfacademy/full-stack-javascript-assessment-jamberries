import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationBar = (props) => {
   
    // Create an array containing the numbers of pages
    //const pagesArray = new Array(props.pages).fill(null).map((number,index) => index)

    //SET PAGE NUMBER
    
    function handlePageChange(event, value) {
        props.setPageNumber(value)
    }

//   return (
//      <Pagination className='pagBar'>
//          <Pagination.Prev onClick={goToPreviousPage}/>
//         {
//             pagesArray.map((pageIndex) => (
//                 <Pagination.Item key={pageIndex} active={props.pageNumber === pageIndex}  onClick={handlePageChange}> {pageIndex+1} </Pagination.Item>
//             ))
//         }
//         <Pagination.Next onClick={goToNextPage}/>
//     </Pagination>
//   );
    return (
        <Stack spacing={2}>
            <Pagination color="secondary" count={props.pages} onChange={handlePageChange} />
        </Stack>
    );
}

export default PaginationBar;