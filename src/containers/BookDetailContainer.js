import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookActions } from '../_actions';
import BookDetail from '../components/BookDetail';

const BookDetailContainer = ({params}) => {
    const [star, setStar] = useState(3);
    const [review, setReview] = useState('');

    const { id } = params;
    useEffect(() => {
        dispatch(bookActions.getBookInfo(id));
    }, [dispatch]);


    
    const book = useSelector(state => state.book);
    const dispatch = useDispatch();
    
    const onChangeStar  = (e , newValue) =>{
        setStar(newValue);
    }
    const onChange = (e) =>{
        const { name, value } = e.target;
        setReview(value);
    };

    const onSubmit = (e) =>{
        e.preventDefault();  

        console.log(id , review , star);
        if(id && review && star)
        {
            let reviewCreate = { bookId : parseInt(id), content : review, score : star};
            dispatch(bookActions.addReview(reviewCreate));
        }
    };
    return (
        <BookDetail 
            info={book}
            star={star}
            review={review}
            onChange={onChange}
            onSubmit={onSubmit}
            onChangeStar={onChangeStar}
        />
    );
};

export default BookDetailContainer;
