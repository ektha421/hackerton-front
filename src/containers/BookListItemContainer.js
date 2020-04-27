import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bookActions } from '../_actions';
import BookListItem from '../components/BookListItem';

const BookListItemContainer = () => {
    // let [data, setData] = useState([]);
    // let [view, setView] = useState({});
    const book = useSelector(state => state.book.list);
    const count = useSelector(state => state.book.count);
    const currentPage = useSelector(state => state.book.currentPage);
    const dispatch = useDispatch();
    let limit = 12;
    let page = 1;

    console.log('book',book);
   
    // const getAll = useCallback( 
    //   page => {
    //     axios(process.env.REACT_APP_API_URL + "/books", {
    //       params: {
    //         method: "GET",
    //         page: page,
    //         limit: limit
    //       }
    //     }).then(res => {
    //       setData(res.data.rows);
    //       setView(res.data);
    //     });
    //   },
    //   [limit]
    // );
  
    useEffect(() => {
     dispatch(bookActions.allBookList(page,limit))
    }, []);
  
    const onPageChange = () => {
     let page = currentPage + 1;
        console.log(page,currentPage)
      dispatch(bookActions.allBookList(page,limit));
    };

    return (
        <BookListItem
            list={book}
            limit={limit}
            page={page}
            count={count}
            currentPage={currentPage}
            onPageChange={onPageChange}
        />
    );
};

export default BookListItemContainer;