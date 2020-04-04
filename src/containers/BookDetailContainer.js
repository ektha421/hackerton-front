import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookActions } from '../_actions';
import BookDetail from '../components/BookDetail';

const BookDetailContainer = () => {

    useEffect(() => {
        dispatch(bookActions.getBanner());
    }, [dispatch]);

    const dispatch = useDispatch();
    
    const getBanner = ()=>{

    };   

    return (
        <BookDetail
            
        />
    );
};

export default BookDetailContainer;
