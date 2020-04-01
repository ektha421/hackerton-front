import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '../_actions';
import Home from '../components/Home';

const HomeContainer = () => {

    useEffect(() => {
        dispatch(homeActions.getBanner());
    }, [dispatch]);

    const newBookList = useSelector(state => state.home.newBookList);
    const manyReviewBookList = useSelector(state => state.home.manyReviewBookList);
    const hightScoreBookList = useSelector(state => state.home.hightScoreBookList);
    const dispatch = useDispatch();
    
    const getBanner = ()=>{

    };   

    return (
        <Home
            newBookList={newBookList}
            hightScoreBookList={hightScoreBookList}
            manyReviewBookList={manyReviewBookList}
            getBanner={getBanner}
        />
    );
};

export default HomeContainer;
