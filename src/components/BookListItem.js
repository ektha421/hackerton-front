import React from "react";
import ReactPaginate from "react-paginate";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const BookListItem = ({ data, view, limit, page, getAll }) => {
  const onPageChange = data => {
    page = data.selected + 1;
    getAll(page);
  };

  return (
    <div id="bookList">
      <div className="list-item">
        <h2 className="title">전체목록</h2>
        <ul className="item-wrap clearfix">
          {data.map(list => (
            <li className="item" key={list.id}>
              <Link to={`/book_detail/${list.id}`}>
                <div className="book-img">
                  <img src={list.thumbnail} alt="" />
                </div>
                <h3 className="book-title">{list.name}</h3>
                <h4 className="book-sub">{list.author}</h4>
              </Link>
              <Rating
                className="star"
                name="read-only"
                value={list.reviewScore}
                readOnly
              />
              <span className="review"> {list.reviewCnt}명</span>
            </li>
          ))}
        </ul>
        <div className="pagination-wrap">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={view.count / limit}
            current={view.currentPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default BookListItem;
