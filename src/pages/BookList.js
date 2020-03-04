import React from 'react';
import ReactPaginate from 'react-paginate';
import BookListItem from '../components/BookListItem';
import '../scss/BookList.scss';

const BookList = () => {
    return (
        <div className="contents">
            <BookListItem />
            <div className="pagination-wrap">
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    // pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    // onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
};

export default BookList;
