import Pagination from 'react-bootstrap/Pagination';

const PaginationBar = (props) => {
   
    // Create an array containing the numbers of pages
    const pagesArray = new Array(props.pages).fill(null).map((number,index) => index)

    //SET PAGE NUMBER

    const goToPreviousPage = () => {
        props.setPageNumber(Math.max(0, props.pageNumber -1));
    }

    const goToNextPage = () => {
        props.setPageNumber(Math.min(props.pages -1, props.pageNumber +1));
    };
    
    function handlePageChange(event) {
        event.preventDefault()
        props.setPageNumber(event.target.innerText - 1)
    }

  return (
     <Pagination>
         <Pagination.Prev onClick={goToPreviousPage}/>
        {
            pagesArray.map((pageIndex) => (
                <Pagination.Item key={pageIndex} active={props.pageNumber === pageIndex}  onClick={handlePageChange}> {pageIndex+1} </Pagination.Item>
            ))
        }
        <Pagination.Next onClick={goToNextPage}/>
    </Pagination>
  );
}

export default PaginationBar;