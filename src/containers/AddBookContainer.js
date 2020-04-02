import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookActions } from '../_actions';
import AddBook from '../components/AddBook';

const AddBookContainer = () => {
    const [inputs, setInputs] = useState({
        name: '',
        content: '',
        // thumbnail : '',
        author : '',
        publicsher : '',

    });
    const [submitted, setSubmitted] = useState(false);
    const { name, content, thumbnail, author, publicsher } = useSelector(state =>state.book);

    console.log('thumbnail',thumbnail);
    // const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        // dispatch(userActions.logout());
    }, [dispatch]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const onChangeFile = (e)=>{
        const {name, value, files} = e.target;


        console.log('파일 들어왔다',files[0]);
        if(files.length > 0){
            dispatch(bookActions.uploadThumnail(files[0]));
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        if (name && content && thumbnail&& author &&publicsher) {
            // dispatch(bookActions.login(email, password));
        }
    }


    // useEffect(() => {
    //     dispatch(bookActions.getBanner());
    // }, [dispatch]);

    // const newBookList = useSelector(state => state.home.newBookList);
    // const manyReviewBookList = useSelector(state => state.home.manyReviewBookList);
    // const hightScoreBookList = useSelector(state => state.home.hightScoreBookList);
    // const dispatch = useDispatch();
    
    // const getBanner = ()=>{

    // };   

    return (
        <AddBook
            name={name} 
            content={content}
            thumbnail={thumbnail}
            author={author} 
            publicsher={publicsher}
            onChange={onChange}
            onChangeFile={onChangeFile}

            onSubmit={onSubmit}
        />
    );
};

export default AddBookContainer;
