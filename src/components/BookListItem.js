import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';

const BookListItem = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                process.env.REACT_APP_API_URL + `/books?page=1`,
            );
            setData(response.data.rows);
            console.log(response.data);
        }
        fetchData();
    }, []);

    return (
        <div className="list-item">
            <h2 className="title">전체목록</h2>
            <ul className="item-wrap clearfix">
                {data.map(list => (
                    <li className="item" key={list.id}>
                        <div className="book-img">
                            <img src={list.thumbnail} alt="" />
                        </div>
                        <h3 className="book-title">{list.name}</h3>
                        <h4 className="book-sub">{list.author}</h4>
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
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={data.count}
                    current={data.currentPage}
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

export default BookListItem;
