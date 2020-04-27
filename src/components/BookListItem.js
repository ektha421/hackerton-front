import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Rating from "@material-ui/lab/Rating";

const BookListItem = ({
  list,
  limit,
  page,
  count,
  currentPage,
  onPageChange}) => {

    console.log( 'currentPage',currentPage);
    console.log( 'page',page);
    console.log( 'limit',limit);
  return (
    <div id="bookList">
      <div className="list-item">
        <h2 className="title">전체목록</h2>
        <ul className="item-wrap clearfix">
          {list.map(item => (
            <li className="item" key={item.id}>
              <Link to={`/book_detail/${item.id}`}>
                <div className="book-img">
                  <img src={item.thumbnail} alt="" />
                </div>
                <h3 className="book-title">{item.name}</h3>
                <h4 className="book-sub">{item.author}</h4>
              </Link>
              <Rating
                className="star"
                name="read-only"
                value={item.reviewScore}
                readOnly
              />
              <span className="review"> {item.reviewCnt}명</span>
            </li>
          ))}
        </ul>
        <div className="pagination-wrap">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={count / limit}
            current={currentPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          /></div>      
      </div>
    </div>
  );
};

export default BookListItem;
