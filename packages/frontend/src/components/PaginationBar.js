import Pagination from 'react-bootstrap/Pagination';

const PaginationBar = (props) => {
   
    // Create an array containing the numbers of pages
    const pagesArray = new Array(props.pages).fill(null).map((number,index) => index)

    //SET PAGE NUMBER

    // const goToPreviousPage = () => {
    //     setPageNumber(Math.max(0, pageNumber -1));
    // }

    // const goToNextPage = () => {
    //     setPageNumber(Math.min(noOfPages -1, pageNumber +1));
    // };
    
    function handlePageChange(event) {
        event.preventDefault()
        props.setPageNumber(event.target.innerText - 1)
    }

  return (
    <div>
     <Pagination>{
        pagesArray.map((pageIndex) => (
            <Pagination.Item key={pageIndex} active={props.pageNumber === pageIndex}  onClick={handlePageChange}> {pageIndex+1} </Pagination.Item>
        ))
    }</Pagination>
  </div>
  );
}

export default PaginationBar;